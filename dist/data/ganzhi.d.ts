/**
 * 天干地支核心常量（单一来源）
 *
 * 所有模块应从此文件导入干支、五行映射等基础常量，
 * 避免在各处重复定义。
 */
export declare const TIAN_GAN: readonly ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
export type TianGan = typeof TIAN_GAN[number];
export declare const DI_ZHI: readonly ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
export type DiZhi = typeof DI_ZHI[number];
export declare const GAN_WUXING: Record<string, string>;
/** @deprecated 使用 GAN_WUXING 代替 */
export declare const STEM_ELEMENTS: Record<string, string>;
export declare const ZHI_WUXING: Record<string, string>;
export declare const YI_MA_MAP: Record<string, string>;
export declare function getStemYinYang(stem: string): 'yang' | 'yin';
