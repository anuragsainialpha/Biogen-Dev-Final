"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderBaseSchema = new mongoose_1.default.Schema({
    name: String,
    required: Boolean,
    disabled: Boolean,
    display: Boolean,
    isMandatory: Boolean,
    type: String,
    displayText: String,
    defaultValue: String,
    gtmVersion: Number,
    xmlNs: ['String'],
    path: ['Mixed'],
});
exports.OrderBase = (domain, instance) => mongoose_1.default.model('OrderBase', orderBaseSchema, `${domain}_OrderBase_${instance}`);
