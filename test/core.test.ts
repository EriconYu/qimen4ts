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

test('拆补转盘固定盘：清明阳遁一局', async () => {
  const result = await calculateQimen({ year: 2026, month: 4, day: 10, hour: 14, timezone: 'Asia/Shanghai' });
  assert.equal(result.algorithmVersion, 'qimen-zhuanpan-chaibu-v1');
  assert.deepEqual(result.siZhu, { year: '丙午', month: '壬辰', day: '甲寅', hour: '辛未' });
  assert.equal(result.dateInfo.solarTerm, '清明');
  assert.equal(result.dunType, 'yang');
  assert.equal(result.juNumber, 1);
  assert.equal(result.yuan, '中元');
  assert.equal(result.xunShou, '甲子');
  assert.deepEqual(result.zhiFu, { star: '天蓬星', palace: 4 });
  assert.deepEqual(result.zhiShi, { gate: '休门', palace: 8 });
  assert.deepEqual(result.palaces.map(p => p.earthStem), ['戊', '己', '庚', '辛', '壬', '癸', '丁', '丙', '乙']);
  assert.deepEqual(result.palaces.map(p => p.heavenStem), ['己', '庚', '癸', '戊', '', '乙', '辛', '丁', '丙']);
  assert.deepEqual(result.palaces.map(p => p.gate), ['开门', '景门', '生门', '伤门', '', '惊门', '死门', '休门', '杜门']);
});

test('拆补转盘固定盘：处暑阴遁一局', async () => {
  const result = await calculateQimen({ year: 2026, month: 9, day: 4, hour: 14, timezone: 'Asia/Shanghai' });
  assert.deepEqual(result.siZhu, { year: '丙午', month: '丙申', day: '辛巳', hour: '乙未' });
  assert.equal(result.dateInfo.solarTerm, '处暑');
  assert.equal(result.dunType, 'yin');
  assert.equal(result.juNumber, 1);
  assert.equal(result.yuan, '上元');
  assert.deepEqual(result.zhiFu, { star: '天柱星', palace: 2 });
  assert.deepEqual(result.zhiShi, { gate: '惊门', palace: 6 });
});

test('夏至后转为阴遁', async () => {
  const result = await calculateQimen({ year: 2026, month: 6, day: 21, hour: 17, timezone: 'Asia/Shanghai' });
  assert.equal(result.dateInfo.solarTerm, '夏至');
  assert.equal(result.dunType, 'yin');
  assert.equal(result.juNumber, 9);
  assert.deepEqual(result.zhiFu, { star: '天心星', palace: 3 });
  assert.deepEqual(result.zhiShi, { gate: '开门', palace: 3 });
});

test('拒绝被 Date 自动归一化的无效输入', () => {
  assert.throws(() => calculateQimen({ year: 2026, month: 2, day: 30, hour: 12 }), /日期无效/);
  assert.throws(() => calculateQimen({ year: 2026, month: 4, day: 10, hour: 24 }), /hour/);
  assert.throws(() => calculateQimen({ year: 2026, month: 4, day: 10, hour: 12, minute: 60 }), /minute/);
});
