"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryFromGtm = exports.getUpdatedProp = exports.getItemData = exports.getItemSchema = exports.validateItemAndContactFromGtm = exports._getCountryFromGtm = void 0;
const lodash_1 = __importDefault(require("lodash"));
const promise_memoize_1 = __importDefault(require("promise-memoize"));
const item_1 = require("../../models/item");
const schemaItem_1 = require("../../models/schemaItem");
const itemProps_1 = require("./itemProps");
const other_1 = require("../other");
const dbXmlQuery_1 = require("../dbXmlQuery");
const gtm_1 = require("../../api/gtm");
function _getItemData(schemaItem, gtmVersion, gtmData, domain) {
    return new Promise(function (resolve) {
        let { Header: IHeader, Remark: IRemark, Refnum: IRefnum, GtmItemClassification: IClass, GtmItemDescription: IDesc, ItemFeature: IFeature, } = schemaItem.ItemMaster.Item;
        const xmlNs = schemaItem.xmlNs;
        IHeader = getHeaders(IHeader, gtmVersion, xmlNs, domain);
        IRemark = getRemarks(gtmData, IRemark, gtmVersion, xmlNs, domain);
        IRefnum = getRefnums(gtmData, IRefnum, gtmVersion, xmlNs, domain);
        IFeature = getfeatures(gtmData, IFeature, gtmVersion, xmlNs, domain);
        IClass = getClassifications(gtmData, IClass, gtmVersion, xmlNs, domain);
        IDesc = getDescriptions(gtmData, IDesc, gtmVersion, xmlNs, domain);
        resolve(lodash_1.default.uniqBy([...IHeader, ...IRemark, ...IRefnum, ...IFeature, ...IClass, ...IDesc], filterByName()));
    });
}
function filterByName() {
    return (e) => e.name;
}
function getDescriptions(gtmData, GtmItemDescription, gtmVersion, xmlNs, domain) {
    const itemDescription = gtmData.match(/GTMITEMDESCRIPTIONS="(.*?)"/)[1].split(',');
    GtmItemDescription = itemDescription.map(getMappedItemDesc(GtmItemDescription, gtmVersion, xmlNs, domain));
    return GtmItemDescription;
}
function getClassifications(gtmData, GtmItemClassification, gtmVersion, xmlNs, domain) {
    const itemClassification = gtmData.match(/GTMITEMCLASSIFICATIONS="(.*?)"/)[1].split(',');
    GtmItemClassification = itemClassification.map(getMappedItemClass(GtmItemClassification, gtmVersion, xmlNs, domain));
    return GtmItemClassification;
}
function getMappedItemDesc(GtmItemDescription, gtmVersion, xmlNs, domain) {
    return (e, i) => itemProps_1.mapItemDescription(e, GtmItemDescription, 'Item : Description', gtmVersion, xmlNs, i, domain);
}
function getMappedItemClass(GtmItemClassification, gtmVersion, xmlNs, domain) {
    return (e, i) => itemProps_1.mapItemClassification(e, GtmItemClassification, 'Item : Classification', gtmVersion, xmlNs, i, domain);
}
function getfeatures(gtmData, ItemFeature, gtmVersion, xmlNs, domain) {
    const itemFeatures = gtmData.match(/ITEMFEATURES="(.*?)"/)[1].split(',');
    ItemFeature = itemFeatures.map((e, i) => itemProps_1.mapItemFeature(e, ItemFeature, 'Item : Feature', gtmVersion, xmlNs, i, domain));
    return ItemFeature;
}
function getRefnums(gtmData, Refnum, gtmVersion, xmlNs, domain) {
    const refnumQuals = gtmData.match(/REFNUMS="(.*?)"/)[1].split(',');
    Refnum = refnumQuals.map((e, i) => itemProps_1.mapRefnum(e, Refnum, 'Item : Refnum', gtmVersion, xmlNs, i, domain));
    return Refnum;
}
function getRemarks(gtmData, Remark, gtmVersion, xmlNs, domain) {
    const remarkQuals = gtmData.match(/REMARKS="(.*?)"/)[1].split(',');
    Remark = remarkQuals.map((e, i) => itemProps_1.mapRemark(e, Remark, 'Item : Remark', gtmVersion, xmlNs, i, domain));
    return Remark;
}
function getHeaders(ItemHeader, gtmVersion, xmlNs, domain) {
    ItemHeader = ItemHeader.map((e) => itemProps_1.mapHeader(e, 'Item : Header', gtmVersion, xmlNs, domain));
    return ItemHeader;
}
function _getUpdatedProp(ItemMaster, item, instance, domain) {
    return new Promise(async function (resolve) {
        const newPropAddedinGtm = lodash_1.default.differenceWith(ItemMaster, item, (a, b) => a.name === b.name);
        const newPropRemovedinGtm = lodash_1.default.differenceWith(item, ItemMaster, (a, b) => a.name === b.name);
        if (newPropAddedinGtm.length > 0) {
            const nitem = await item_1.Item(domain, instance).insertMany(newPropAddedinGtm);
            resolve([...item, ...nitem]);
        }
        else if (newPropRemovedinGtm.length > 0) {
            await item_1.Item(domain, instance).deleteMany({ _id: { $in: [...newPropRemovedinGtm.map((d) => d._id)] } });
            resolve(lodash_1.default.differenceWith(item, newPropRemovedinGtm, (a, b) => a.name === b.name));
        }
        else
            resolve(item);
    });
}
function _getItemSchema(gtmVersion) {
    return schemaItem_1.SchemaItem.findOne({ gtmVersion: gtmVersion }).sort({ _id: 1 });
}
async function _getCountryFromGtm(url, username, password) {
    const { data: countryCodes } = await other_1.asyncHandler(gtm_1.dbXml(url, dbXmlQuery_1.getCountryCodeFromGtm, username, password));
    const country = getGtmCountryAsObject(countryCodes);
    return country;
}
exports._getCountryFromGtm = _getCountryFromGtm;
function getGtmCountryAsObject(str) {
    const re = /COUNTRY="(.*?)"/g;
    const result = {};
    let current;
    while ((current = re.exec(str))) {
        const keyVal = current.pop().split(' - ');
        result[keyVal[0]] = keyVal[1];
    }
    return Object.keys(result).length > 0 ? result : {};
}
async function validateItemAndContactFromGtm(url, username, password, body) {
    const { data } = await other_1.asyncHandler(gtm_1.dbXml(url, dbXmlQuery_1.validateItemAndContact(body), username, password));
    const codes = getGtmItemAndContactValidDataAsObj(data);
    return codes;
}
exports.validateItemAndContactFromGtm = validateItemAndContactFromGtm;
function getGtmItemAndContactValidDataAsObj(str) {
    const result = { items: {}, contacts: {} };
    const partypattern = /PARTY="(.*?)"/;
    const itemPattern = /ITEM="(.*?)"/;
    if (str.match(partypattern)) {
        const partyMatchStr = str.match(partypattern)[1];
        if (partyMatchStr.includes(',')) {
            const parties = partyMatchStr.split(',');
            parties.forEach((party) => {
                result.contacts[party] = 1;
            });
        }
        else {
            result.contacts[partyMatchStr] = 1;
        }
    }
    if (str.match(itemPattern)) {
        const itemMatchStr = str.match(itemPattern)[1];
        if (itemMatchStr.includes(',')) {
            const items = itemMatchStr.split(',');
            items.forEach((item) => {
                result.items[item] = 1;
            });
        }
        else {
            result.items[itemMatchStr] = 1;
        }
    }
    return result;
}
exports.getItemSchema = promise_memoize_1.default(_getItemSchema, { maxAge: 60000 });
exports.getItemData = promise_memoize_1.default(_getItemData, { maxAge: 60000 });
exports.getUpdatedProp = promise_memoize_1.default(_getUpdatedProp, { maxAge: 60000 });
exports.getCountryFromGtm = promise_memoize_1.default(_getCountryFromGtm);
