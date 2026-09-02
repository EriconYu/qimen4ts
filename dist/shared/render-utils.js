"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDetailLevelBinary = normalizeDetailLevelBinary;
function normalizeDetailLevelBinary(detailLevel) {
    return detailLevel === 'full' || detailLevel === 'more' ? 'full' : 'default';
}
