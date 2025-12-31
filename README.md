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

## 3. 当前开发进度 (Current Status - Day 2)
### ✅ 已完成功能 (Completed)
- **项目初始化**: 环境搭建完成，Tailwind 配置完成。
- **国际化 (i18n)**: 实现了中英文无缝切换，右上角有切换按钮。
- **数字前台 (Digital Reception)**: 
  - 首页重构为卡片式布局 (Card UI)。
  - **核心功能**: 
    - 公司地址展示 + [一键复制] + [唤起地图]。
    - Wi-Fi 账号密码 + [一键复制密码]。
    - 紧急联系人卡片。
  - **导航栏**: 简化版导航，专注于访客体验。

### 🚧 待解决问题 (Blockers)
- **部署失败**: 本地运行正常，但 Git Push 到 GitHub 时遇到权限或配置错误，导致 Vercel 无法更新。计划寻求同事协助解决。

## 4. 下一步计划 (Roadmap)
- **Day 3**: 开发“可视化路书” (Visual Guide)。
  - 功能：时间轴形式展示从地铁/下车点到公司大门的图文指引。
  - 目的：解决“最后100米”找不到大门的痛点。
- **Day 4**: 合作伙伴“口袋BP” (滑动式介绍卡片)。

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
