import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQimen, toQimenJson, toQimenText } from '../src/index.js';

test('奇门基础结构与渲染', async () => {
  const result = await calculateQimen({ year: 2026, month: 4, day: 10, hour: 14, minute: 30, timezone: 'Asia/Shanghai' });
  assert.equal(result.palaces.length, 9);
  assert.ok(result.juNumber >= 1 && result.juNumber <= 9);
  assert.ok(toQimenJson(result));
  assert.ok(toQimenText(result).length > 0);
});

test('奇门晚子时按次日计算', async () => {
  const late = await calculateQimen({ year: 2026, month: 4, day: 10, hour: 23, minute: 30, timezone: 'Asia/Shanghai' });
  const nextDay = await calculateQimen({ year: 2026, month: 4, day: 11, hour: 0, minute: 30, timezone: 'Asia/Shanghai' });
  assert.equal(late.siZhu.day, nextDay.siZhu.day);
  assert.equal(late.siZhu.hour, nextDay.siZhu.hour);
});
