# Situational Awareness 深度导读

对 Leopold Aschenbrenner《Situational Awareness: The Decade Ahead》(2024-06)的原创中文导读,附 2026 年逐条预测对账。**非译本**——定位、写作红线与全部项目约定见 `CLAUDE.md`。

## 结构

```
├── CLAUDE.md            # 项目约定(写作红线 / 组件规范 / DoD)— Claude Code 的最高指令
├── index.html           # 目录页(GitHub Pages 入口)
├── assets/style.css     # 全书共享样式(暗色模式默认)
├── chapters/
│   ├── ch01.html        # 第 1 章(已完成,全书格式基准)
│   └── _template.html   # 新章脚手架
└── spec/skeleton.md     # 权威内容规格:章节结构、每章论点地图与对账要点
```

## 工作流

1. 在本仓库根目录启动 Claude Code。
2. 按 `CLAUDE.md` 的构建顺序逐章推进;每章以 `spec/skeleton.md` 对应小节为内容规格,以 `chapters/ch01.html` 为格式基准。
3. 每章完成后过一遍 CLAUDE.md 中的 Definition of Done,并更新 `index.html` 状态徽标。

## 发布

GitHub Pages:Settings → Pages → Deploy from branch → `main` / root。`.nojekyll` 已就位。
