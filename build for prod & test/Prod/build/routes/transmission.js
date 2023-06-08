"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multiparty_1 = __importDefault(require("multiparty"));
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const other_1 = require("../helper/other");
const gtm_1 = require("../api/gtm");
const dbXmlQuery_1 = require("../helper/dbXmlQuery");
const gtm_2 = require("../api/gtm");
const auth_1 = __importDefault(require("./../middleware/auth"));
const report_1 = require("../models/report");
const setting_1 = require("../models/setting");
const path_1 = __importDefault(require("path"));
const index_1 = require("../index");
const getItemData_1 = require("../helper/Item/getItemData");
const router = express_1.default.Router();
router.post('/', [auth_1.default], other_1.asyncRouteHandler(async (req, res) => {
    const { username, password, url } = req.user;
    const { xml, xmlNs } = req.body;
    let finalXML = xml.toString();
    finalXML = modifyXmlNamespace(finalXML, xmlNs);
    const { data, error } = await other_1.asyncHandler(gtm_1.wmServlet(url, finalXML, username, password));
    if (error)
        return res.status(400).send(error);
    if (!data.includes('ReferenceTransmissionNo'))
        return res.status(400).send('Invalid csv Data');
    const no = getTransmissionNo(data);
    return res.send({ data: { ReferenceTransmissionNo: no } });
}));
router.post('/filedata', [auth_1.default], other_1.asyncRouteHandler(async (req, res) => {
    const form = new multiparty_1.default.Form();
    form.parse(req, async function (err, fields, files) {
        const filePath = files[Object.keys(files)[0]][0].path;
        const data = await node_xlsx_1.default.parse(filePath, { raw: true });
        return res.status(200).send({ data: data[0].data });
    });
}));
router.post('/status', [auth_1.default], other_1.asyncRouteHandler(async (req, res) => {
    const { username, password, url } = req.user;
    const { transmission, reProcess, xids, considerXid } = req.body;
    if (!transmission && !transmission.length)
        return res.status(400).send('Bad request!');
    const transmissionQuery = dbXmlQuery_1.getTransmissionStatus(transmission, reProcess);
    const { data: gtmData, error } = await other_1.asyncHandler(gtm_2.dbXml(url, transmissionQuery, username, password));
    if (error)
        return res.status(400).send(error);
    const statusResponses = gtmData.match(/<TRANSACTION_STATUS(.*?)>/g);
    const mappedStatusArray = [];
    let OBJ = '';
    for (let i = 0; i < statusResponses.length; i++) {
        OBJ = loopAndMapStatusToObj(statusResponses, i, OBJ, mappedStatusArray, considerXid, xids, url);
    }
    if (!reProcess)
        await updateSettingsAndReport(xids, OBJ, username);
    return res.send({ data: mappedStatusArray });
}));
router.get('/validate/static', [auth_1.default], other_1.asyncRouteHandler(async (req, res) => {
    const staticFilePath = path_1.default.join(index_1.ROOT_DIR, 'XMLs', 'static.json');
    const fileData = await other_1.getFileData(staticFilePath);
    return res.status(200).json(JSON.parse(fileData));
}));
router.get('/validate/autogen', [auth_1.default], other_1.asyncRouteHandler(async (req, res) => {
    const { username, password, url } = req.user;
    const autoGen = await getAutoGenIdFromGtm(url, username, password);
    const date = new Date();
    return res.status(200).json({ data: modifyAutogen(autoGen, date) });
}));
router.post('/validate/dynamic', [auth_1.default], other_1.asyncRouteHandler(async (req, res) => {
    const { username, password, url } = req.user;
    const { items, contacts } = req.body;
    if (!items || !contacts)
        return res.status(400).send('Items or Contacts missing!');
    const data = await getItemData_1.validateItemAndContactFromGtm(url, username, password, req.body);
    return res.status(200).json({ data });
}));
function getTransmissionNo(data) {
    return data.match(/ReferenceTransmissionNo>(.*?)</)[1];
}
async function updateSettingsAndReport(xids, OBJ, username) {
    const uniqueXids = Array.from(new Set(xids));
    const update = { $inc: { [OBJ]: uniqueXids.length } };
    await setting_1.Setting(other_1.CONSTS.CURRENT_INSTANCE).findOneAndUpdate({ version: +other_1.CONSTS.GTMVERSION }, update, { new: true });
    await report_1.Report(other_1.CONSTS.CURRENT_INSTANCE).create({
        instance: other_1.CONSTS.CURRENT_INSTANCE,
        user: username,
        [OBJ]: uniqueXids.length,
    });
}
function loopAndMapStatusToObj(statusResponses, i, OBJ, mappedStatusArray, considerXid, xids, url) {
    const d = statusResponses[i];
    OBJ = d
        .match(/DATA_QUERY_TYPE_GID="(.*?)"/)[1]
        .toLowerCase()
        .replace('gtm', '')
        .replace('contact', 'party')
        .trim()
        .replace(' ', '-');
    const no = d.match(/I_TRANSACTION_NO="(.*?)"/)[1];
    const objId = d.match(/OBJECT_GID="(.*?)"/)[1];
    const status = d.match(/STATUS="(.*?)"/)[1];
    mappedStatusArray.push({
        xid: !considerXid ? (objId.includes('.') ? objId.split('.')[1] : objId) : xids[i],
        transmission: no,
        status,
        instanceURL: url + other_1.getReportUrl(no),
        viewURL: url + other_1.getViewUrl(),
    });
    return OBJ;
}
function modifyXmlNamespace(finalXML, xmlNs) {
    finalXML = finalXML.replace('<Transmission>', `<Transmission xmlns="${xmlNs[0]}" xmlns:otm="${xmlNs[0]}" xmlns:gtm="${xmlNs[1]}" >`);
    return finalXML;
}
async function getAutoGenIdFromGtm(url, username, password) {
    const { data } = await other_1.asyncHandler(gtm_2.dbXml(url, dbXmlQuery_1.getAutoGenId, username, password));
    const codes = extractAutoGenIds(data);
    return codes;
}
function extractAutoGenIds(data) {
    const itemIdPattern = /ITEM="(.*?)"/;
    const lastItemId = data.match(itemIdPattern)[1];
    const contactIdPattern = /CONTACT="(.*?)"/;
    const lastContactId = data.match(contactIdPattern)[1];
    const trxIdPattern = /TRX="(.*?)"/;
    const lastTrxId = data.match(trxIdPattern)[1];
    return { item: lastItemId, contact: lastContactId, transaction: lastTrxId };
}
function modifyAutogen(whole_string, date) {
    const itemIdPattern = whole_string.item.split(/(\d+)/);
    const contactIdArr = whole_string.contact.split(/-/g);
    const trxIdArr = whole_string.transaction.split(/-/g);
    const dateStr = '';
    const item = { str: itemIdPattern[0], counter: Number(itemIdPattern[1]) };
    const contact = getAutogenStr(contactIdArr, dateStr, '');
    const location = getAutogenStr(contactIdArr, dateStr, '');
    const transaction = getAutogenStr(trxIdArr, dateStr, '');
    const transactionLine = getAutogenStr(trxIdArr, dateStr, '');
    return { item, contact, transaction, location, transactionLine };
}
function getAutogenStr(arr, dateStr, defaultStr) {
    return arr.length === 2
        ? { str: arr[0], counter: Number(arr[1]) }
        :
            { str: defaultStr, counter: 0 };
}
exports.default = router;
