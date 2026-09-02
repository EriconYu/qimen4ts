import { DI_ZHI, TIAN_GAN } from '../data/ganzhi.js';
const XUN_KONG_TABLE: Record<string, [string, string]> = {
  '甲子旬': ['戌', '亥'], '甲戌旬': ['申', '酉'], '甲申旬': ['午', '未'],
  '甲午旬': ['辰', '巳'], '甲辰旬': ['寅', '卯'], '甲寅旬': ['子', '丑'],
};
export function getKongWang(dayGan: string, dayZhi: string): { xun: string; kongZhi: [string, string] } {
  const ganIndex = TIAN_GAN.indexOf(dayGan as never);
  const zhiIndex = DI_ZHI.indexOf(dayZhi as never);
  if (ganIndex < 0 || zhiIndex < 0) return { xun: '甲子旬', kongZhi: XUN_KONG_TABLE['甲子旬'] };
  const startZhi = DI_ZHI[(zhiIndex - ganIndex + 12) % 12];
  const starts = ['子', '戌', '申', '午', '辰', '寅'];
  const names = ['甲子旬', '甲戌旬', '甲申旬', '甲午旬', '甲辰旬', '甲寅旬'];
  const index = starts.indexOf(startZhi);
  const xun = names[index] || '甲子旬';
  return { xun, kongZhi: XUN_KONG_TABLE[xun] };
}
export { GAN_WUXING } from '../data/ganzhi.js';
