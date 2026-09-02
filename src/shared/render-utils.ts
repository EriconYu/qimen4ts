import type { DetailLevel } from '../domains/shared/types.js';
export function normalizeDetailLevelBinary(detailLevel?: DetailLevel): 'default' | 'full' {
  return detailLevel === 'full' || detailLevel === 'more' ? 'full' : 'default';
}
