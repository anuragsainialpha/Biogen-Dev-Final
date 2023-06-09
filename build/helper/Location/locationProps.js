"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAddressLine = exports.mapRemark = exports.mapRefnum = exports.mapHeader = void 0;
const other_1 = require("../other");
const renamer_1 = require("../renamer");
const LOCATION_MANDATORY_FIELD = [
    'Location TransactionCode',
    'Location ID DomainName',
    'Location ID',
    'Party ID DomainName',
    'Party ID',
    'Party TransactionCode'
];
const getDisplayText = (prop, index, element) => {
    const displayText = other_1.capitalize(element.split('_').join(' '));
    return displayText.split('.')[1] ? displayText.split('.')[1] : displayText;
};
const getIndex = (prop, serachTerm) => {
    const getIndex = d => d.path.search(serachTerm) > -1;
    return prop.findIndex(getIndex);
};
for (let addressSequenceIndex = 0; addressSequenceIndex < other_1.getSequence.length; addressSequenceIndex++) {
    const element = other_1.getSequence[addressSequenceIndex];
}
exports.mapHeader = (element, type, gtmVersion, xmlNs, domain) => {
    return {
        name: element.name,
        required: true,
        disabled: renamer_1.getMandatoryElement(element.name, LOCATION_MANDATORY_FIELD),
        display: renamer_1.getMandatoryElement(element.name, LOCATION_MANDATORY_FIELD),
        type: type,
        displayText: element.name,
        defaultValue: renamer_1.getDefaultValue(element.path, domain),
        path: [element.path],
        gtmVersion,
        xmlNs
    };
};
exports.mapRefnum = (element, Refnum, type, gtmVersion, xmlNs, i, domain) => {
    const refIdIndex = getIndex(Refnum, 'Xid');
    const refDomainNameIndex = getIndex(Refnum, 'DomainName');
    const refValueIndex = getIndex(Refnum, 'RefnumValue');
    const remTransactionCodeIndex = getIndex(Refnum, 'TransactionCode');
    return {
        name: element,
        required: true,
        disabled: false,
        display: false,
        type: type,
        displayText: getDisplayText(Refnum, refIdIndex, element),
        defaultValue: renamer_1.getDefaultValue(Refnum[refValueIndex].path, domain),
        path: [
            { path: Refnum[refValueIndex].path.replace('INDEX', i), value: '' },
            other_1.getDomainName(element, Refnum[refDomainNameIndex].path.replace('INDEX', i)),
            other_1.getTC(element, Refnum[remTransactionCodeIndex].path.replace('INDEX', i)),
            other_1.getXID(element, Refnum[refIdIndex].path.replace('INDEX', i))
        ],
        gtmVersion,
        xmlNs
    };
};
exports.mapRemark = (element, Remark, type, gtmVersion, xmlNs, i, domain) => {
    const remIdIndex = getIndex(Remark, 'Xid');
    const remDomainNameIndex = getIndex(Remark, 'DomainName');
    const remTextIndex = getIndex(Remark, 'RemarkText');
    const remSequenceIndex = getIndex(Remark, 'RemarkSequence');
    const remTransactionCodeIndex = getIndex(Remark, 'TransactionCode');
    return {
        name: element,
        required: true,
        disabled: false,
        display: false,
        type: type,
        displayText: getDisplayText(Remark, remIdIndex, element),
        defaultValue: renamer_1.getDefaultValue(Remark[remTextIndex].path, domain),
        path: [
            { path: Remark[remTextIndex].path.replace('INDEX', i), value: '' },
            other_1.getTC(element, Remark[remTransactionCodeIndex].path.replace('INDEX', i)),
            other_1.getSequence(element, Remark[remSequenceIndex].path.replace('INDEX', i), i),
            other_1.getDomainName(element, Remark[remDomainNameIndex].path.replace('INDEX', i)),
            other_1.getXID(element, Remark[remIdIndex].path.replace('INDEX', i))
        ],
        gtmVersion,
        xmlNs
    };
};
exports.mapAddressLine = (element, AddressLine, type, gtmVersion, xmlNs, i, prefix, domain) => {
    const addValueIndex = 1;
    const addSequenceIndex = 0;
    return {
        name: `${prefix} ${element}`.trim(),
        required: true,
        disabled: false,
        display: false,
        type: type,
        displayText: `${prefix} ${getDisplayText(AddressLine, i, element)}`.trim(),
        defaultValue: '',
        path: [
            other_1.getSequence(element, AddressLine[addSequenceIndex].path.replace('INDEX', i), i),
            { path: AddressLine[addValueIndex].path.replace('INDEX', i), value: '' }
        ],
        gtmVersion,
        xmlNs
    };
};
