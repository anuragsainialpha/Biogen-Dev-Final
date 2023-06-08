"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wmServlet = exports.dbXml = void 0;
const axios_1 = __importDefault(require("axios"));
exports.dbXml = (baseURL, query, username, password) => {
    const uriParam = baseURL + '/GC3/glog.integration.servlet.DBXMLServlet?command=xmlExport';
    return axios_1.default.post(uriParam, query, {
        headers: { 'Content-Type': 'text/xml' },
        auth: {
            username: username,
            password: password,
        },
    });
};
exports.wmServlet = (baseURL, query, username, password) => {
    const uriParam = baseURL + '/GC3/glog.integration.servlet.WMServlet';
    return axios_1.default.post(uriParam, query, {
        headers: { 'Content-Type': 'text/xml' },
        auth: {
            username: username,
            password: password,
        },
    });
};
