"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaShipment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaShipment = new mongoose_1.default.Schema({
    xmlNs: {
        type: ['String']
    },
    gtmVersion: {
        type: 'Number'
    },
    ActualShipment: {
        type: 'Mixed'
    }
});
exports.SchemaShipment = mongoose_1.default.model('SchemaShipment', schemaShipment, 'ShipmentSchema');
