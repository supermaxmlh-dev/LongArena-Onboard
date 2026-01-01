# Company Digital Companion (公司数字伴侣)

## 1. 项目愿景 (Product Vision)
本项目不再是一个传统的静态展示官网，而是一个**“移动端优先”的高频实用工具**。
- **目标用户**：来访客户、合作伙伴、新入职员工。
- **核心价值**：即时解决线下场景痛点（如找路、连WiFi、获取资料）。

## 2. 技术栈 (Tech Stack)
- **框架**: React + Vite
- **样式**: Tailwind CSS
- **语言**: JavaScript
- **多语言**: i18next + react-i18next (支持中/英切换)
- **部署**: Vercel (Planned/In Progress)
- **代码管理**: GitHub

## 3. 当前开发进度 (Current Status - Day 5)
### ✅ 已完成功能 (Completed)
**Day 1-2: 基础架构 & 数字前台**
- 项目初始化，Tailwind 配置。
- 国际化 (i18n) 支持。
- 首页数字前台 (地址、WiFi、联系人)。

**Day 3: 可视化路书 (Location Guide)**
- 完成 `LocationGuide` 组件。
- 实现地铁、打车、自驾三种方式的切换指引。
- 解决“最后100米”迷路痛点。

**Day 4: 灵魂拷问流 (Resonance Flow)**
- 完成 `ResonanceFlow` 组件。
- 实现 5 个“灵魂拷问”卡片滑动交互。
- 配合“口袋BP”概念，植入核心价值观。

**Day 5: 秘密基地 & 视频中心 (Secret Base & Video Hub)**
- 完成 `SecretBase` 组件，整合原有功能。
- 新增视频展示区 (SalesNail 战训一体、客户案例等)。
- 优化文案，回归“叛逆”风格 (Rebellious Tone)。
- 解决 Git Push 权限问题，打通 GitHub 部署流。

### 🚧 待解决问题 (Blockers)
- 暂无阻塞性问题。

## 4. 下一步计划 (Roadmap)
- **Day 6**: 进一步优化 UI 细节与动画效果。
- **Future**: 接入后端 CMS 或更多动态内容。

## 5. 目录结构说明 (Directory Structure)
```
src/
├── components/   # 存放独立组件 (如 Navbar, InfoCard)
├── App.jsx       # 主应用组件
├── main.jsx      # 入口文件
├── i18n.js       # 国际化配置及翻译文件 (Translations)
└── ...
```

## 6. 运行指南 (Getting Started)

### 安装依赖
```bash
npm install
```

### 本地启动
```bash
npm run dev
```

### 构建打包
```bash
npm run build
```
