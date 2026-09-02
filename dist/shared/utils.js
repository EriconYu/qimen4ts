"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GAN_WUXING = void 0;
exports.getKongWang = getKongWang;
const ganzhi_js_1 = require("../data/ganzhi.js");
const XUN_KONG_TABLE = {
    '甲子旬': ['戌', '亥'], '甲戌旬': ['申', '酉'], '甲申旬': ['午', '未'],
    '甲午旬': ['辰', '巳'], '甲辰旬': ['寅', '卯'], '甲寅旬': ['子', '丑'],
};
function getKongWang(dayGan, dayZhi) {
    const ganIndex = ganzhi_js_1.TIAN_GAN.indexOf(dayGan);
    const zhiIndex = ganzhi_js_1.DI_ZHI.indexOf(dayZhi);
    if (ganIndex < 0 || zhiIndex < 0)
        return { xun: '甲子旬', kongZhi: XUN_KONG_TABLE['甲子旬'] };
    const startZhi = ganzhi_js_1.DI_ZHI[(zhiIndex - ganIndex + 12) % 12];
    const starts = ['子', '戌', '申', '午', '辰', '寅'];
    const names = ['甲子旬', '甲戌旬', '甲申旬', '甲午旬', '甲辰旬', '甲寅旬'];
    const index = starts.indexOf(startZhi);
    const xun = names[index] || '甲子旬';
    return { xun, kongZhi: XUN_KONG_TABLE[xun] };
}
var ganzhi_js_2 = require("../data/ganzhi.js");
Object.defineProperty(exports, "GAN_WUXING", { enumerable: true, get: function () { return ganzhi_js_2.GAN_WUXING; } });
