# qimen4ts

独立的 TypeScript 奇门遁甲排盘引擎。仅包含排盘、结构化 JSON 和规范文本输出，不包含 AI 解读或业务服务。

## 安装

```bash
npm install qimen4ts
```

## 使用

```ts
import { calculateQimen, toQimenJson, toQimenText } from 'qimen4ts';

const chart = await calculateQimen({
  year: 2026, month: 4, day: 10, hour: 14, minute: 30,
  timezone: 'Asia/Shanghai',
});
console.log(toQimenJson(chart));
console.log(toQimenText(chart));
```

时间参数使用当地墙上时间。时区必须是 IANA 时区名。

## 依赖与许可证

排盘核心依赖 `taobi`，历法依赖 `lunar-javascript`；分发时须同时遵守上游许可证，详见 `NOTICE`。
