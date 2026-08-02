# 《Situational Awareness 深度导读》骨架 Spec v0.1

> 项目定位:对 Leopold Aschenbrenner《Situational Awareness: The Decade Ahead》(2024.06)的原创中文导读与两年后对账。
> 形态:纯中文 HTML ebook,GitHub Pages 托管,沿用期权手册 / AI 系统手册的技术约定(单页 HTML 章节 + 目录页、dark mode 默认、可导出 PDF)。

---

## 0. 全书写作原则(写入 CLAUDE.md)

1. **解读体,不是翻译体**。所有正文均为原创分析与转述,禁止成段翻译原文。
2. **引用规范**:每处直接引用原文不超过一句(英文原句 + 中文释义),且必须服务于分析;每章直接引用控制在 3–5 处以内。章末统一给出原文对应章节链接(situational-awareness.ai)。
3. **术语规范**:沿用既有惯例——英文术语为主,首次出现加中文注释,并收录进独立 Glossary 页。
4. **对账规范**:每条"2026 验证"注释必须给出可核查的事实与来源链接(新闻/财报/官方文件),区分「已验证 ✅ / 部分验证 🟡 / 未验证或证伪 ❌ / 尚无法判定 ⏳」四档。
5. **立场规范**:导读本身保持中立,既呈现他的论证链,也呈现当时与现在的批评;评价交给"对账"数据说话。
6. 本书不设思考题/测验组件(区别于前两本手册):导读属陪读评论体,启发性内容一律织入正文,不单列。

---

## 1. 章节结构

### 前言:如何阅读本书
- 本导读是什么、不是什么(不是译本;版权说明与原文链接)
- 为什么 2026 年是重读这篇文章的最佳时点:两年,刚好够预测落地或落空
- 阅读路径建议:政策读者 / 技术读者 / 投资读者的三条捷径

### 第 0 章:人物与时间线
- Aschenbrenner 小传:柏林 → 哥大(19 岁 valedictorian)→ FTX Future Fund → OpenAI Superalignment → 2024.04 被解雇
- 文章发布的语境:Superalignment 团队解散、Ilya/Jan Leike 出走的 2024 年夏天
- 大事年表(2024.06 发文 → 2024.07 创立基金 → 规模膨胀 → 2026.07 爆仓清算),为终章埋线

### 第 1 章:From GPT-4 to AGI — Counting the OOMs
**论点地图**
- 三条曲线:算力(compute)、算法效率(algorithmic efficiencies)、unhobbling
- GPT-2 → GPT-4 = 学龄前 → 聪明高中生的类比;外推到 2027
- "AGI by 2027 is strikingly plausible" 的完整推理链与其依赖的假设(数据墙、scaling 持续性)

**关键概念(入 Glossary)**:OOM、effective compute、unhobbling、data wall、test-time compute

**2026 对账(本章是全书对账密度最高的一章)**
- 算力外推 vs 实际前沿训练集群规模与电力瓶颈
- unhobbling 预言 vs agent 化的真实进展(编码 agent、computer use、长任务时长曲线)
- "drop-in remote worker" 的水位评估
- 数据墙:合成数据与推理范式(test-time compute)是否如他预期绕过了它

**当时的批评**:外推主义(straight lines on log plots)、基准测试 ≠ 通用能力

### 第 2 章:From AGI to Superintelligence — the Intelligence Explosion
**论点地图**
- 自动化 AI 研究:数百万 AI 研究员副本 → 十年算法进展压缩进一年
- 从 AGI 到 superintelligence 可能只需约一年;随之而来的军事/经济决定性优势

**关键概念**:intelligence explosion、recursive self-improvement、automated AI researcher

**2026 对账**
- AI 加速 AI 研发的早期证据(实验室内部编码自动化比例、AI 辅助研究的公开披露)vs "爆炸"尚未发生
- 制约因素的现实版:算力仍是硬瓶颈,与他"算法进展可以脱离算力加速"的论证对照

**当时的批评**:收益递减、物理实验瓶颈、组织瓶颈

### 第 3 章:Racing to the Trillion-Dollar Cluster(IIIa)
**论点地图**
- AI 收入增长 → 万亿美元级资本开支 → GW 级到 10GW 级集群
- 电力、变压器、HBM、先进制程成为战略资源;"美国的天然气够不够"

**关键概念**:GW-scale cluster、HBM、capex supercycle、power constraint

**2026 对账**
- 超大规模厂商 capex 实际曲线 vs 他的外推
- 10GW 级项目(Stargate 等)公告与落地进度;电力瓶颈成为主流叙事的时间点
- 本章与终章呼应:这正是他基金重仓的主题(SK Hynix、CoreWeave、电力股)

**当时的批评**:收入能否支撑 capex("6000 亿美元问题")

### 第 4 章:Lock Down the Labs — Security for AGI(IIIb)
**论点地图**
- 实验室安全 ≈ 初创公司水平,面对的却是国家级对手
- 模型权重与算法机密是"国家机密"级资产;呼吁政府级安保

**关键概念**:model weights security、algorithmic secrets、SL/security levels、insider threat

**2026 对账**
- 两年间公开的窃密/间谍案例;各实验室安全等级承诺(RSP/框架文件)的演进
- 出口管制与权重管制的政策进展

### 第 5 章:Superalignment(IIIc)
**论点地图**
- 对齐超人类系统是未解技术问题;RLHF 无法扩展到超级智能
- 他主张的技术路线与"自动化对齐研究"的 bootstrap 方案

**关键概念**:superalignment、scalable oversight、interpretability、RLHF 及其局限

**2026 对账**
- 讽刺起点:OpenAI Superalignment 团队在发文前已解散;此后各实验室对齐/可解释性研究的实际进展
- interpretability 的代表性成果;对齐问题在行业话语中的地位变化

**当时的批评**:对齐悲观派与乐观派对他中间立场的两面夹击

### 第 6 章:The Free World Must Prevail(IIId)+ The Project(IV)
(原文两部分合并为一章导读,因论证连续)
**论点地图**
- 超级智能 = 决定性军事优势;中美竞赛框架;为何"必须领先而非暂停"
- The Project:2027–28 政府必然介入,曼哈顿计划式国家项目

**关键概念**:decisive strategic advantage、compute governance、The Project、export controls

**2026 对账**
- 出口管制、国家 AI 政策、政府-实验室合作的实际形态 vs "国家项目"预言
- 中国前沿模型的追赶实况 vs 他对差距的判断
- "Project 化"了吗:介于市场与曼哈顿计划之间的现实中间态

**当时的批评**:军备竞赛叙事的自我实现风险;鹰派框架的反对声音

### 第 7 章:Parting Thoughts + 全书总评
- 他的世界观内核:AGI realism(既非 doomer 也非 e/acc)
- 两年对账总记分牌(全书 ✅🟡❌⏳ 汇总表 + 图)
- 这篇文章改变了什么:算力地缘政治进入主流话语的路径复盘

### 终章(案例研究):当预言家亲自下注
- Situational Awareness LP:从发文到募资的"认知变现"路径
- 1000%+ 收益、450 亿美元峰值 → 2026.07 杠杆爆仓、Citadel 接盘的完整复盘
- 核心命题:**论点正确性 ≠ 交易生存性**——杠杆、择时、路径依赖
- 与期权手册的跨书呼应:风险管理章节互链(这是三本手册的第一处互联)
- 收束全书暗线:如果你在 2024 年读完原文并完全相信它,存在"既表达观点又活下来"的持仓方式吗?(以正文论述收尾,不设思考题)

### 附录
- A. Glossary(全书术语总表,中英对照 + 一句话解释 + 首次出现章节)
- B. 大事年表(2024.06–2026.08,可视化时间轴)
- C. 原文章节 ↔ 导读章节对照表 + 延伸阅读(对立观点书单)
- D. 参考来源列表(全书所有对账注释的引用汇总)

---

## 2. 技术与流程约定

- 复用手册仓库结构与 CLAUDE.md 约定;dark mode 默认
- 对账注释做成统一的 UI 组件(带 ✅🟡❌⏳ 徽标的 callout 卡片),便于全书汇总页自动聚合
- 图表需求初估:三条曲线示意图(第1章)、智能爆炸时间线(第2章)、capex 实际 vs 外推对比图(第3章)、总记分牌(第7章)、基金净值时间线(终章)
- 工作流:chat 确认骨架 → chat 出样章(建议第 1 章,对账密度最高)→ Claude Code 全量构建

## 3. 待你确认的决策点

1. 章节合并方案:IIId 与 IV 合并为一章,是否 OK?
2. 终章(基金复盘)的篇幅:按完整章做,还是压缩为附录?
3. 样章选第 1 章(Counting the OOMs)还是终章?
4. 对账来源引用格式:章末尾注,还是行内链接?
