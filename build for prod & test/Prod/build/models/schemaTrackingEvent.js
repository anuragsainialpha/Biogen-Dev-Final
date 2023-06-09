"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaTrackingEvent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaTrackingEvent = new mongoose_1.default.Schema({
    xmlNs: {
        type: ['String']
    },
    gtmVersion: {
        type: 'Number'
    },
    ShipmentStatus: {
        type: 'Mixed'
    }
});
exports.SchemaTrackingEvent = mongoose_1.default.model('SchemaTrackingEvent', schemaTrackingEvent, 'TrackingEventSchema');
