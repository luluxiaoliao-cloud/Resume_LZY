# 个人网站美化代码使用指南

## 项目概述

这是一个基于 Canva 个人网站模板风格的现代化个人网站，包含完整的 HTML、CSS 和 JavaScript 代码。网站采用简约高级的设计风格，使用莫兰迪色系配色，具备响应式适配和流畅的交互效果。

## 设计风格特点

### 1. 色彩方案
- 主色调：莫兰迪色系（雾霾蓝/豆沙绿/浅卡其）
- 辅助色：中性色（白色/浅灰/深灰）
- 色彩对比度符合 WCAG 2.1 无障碍标准

### 2. 排版
- 字体：Inter 字体（Google Fonts）
- 标题层级：H1 > H2 > H3 > 正文
- 行高和字间距优化阅读体验

### 3. 布局
- 响应式设计，适配移动端（375px+）、平板（768px+）、桌面端（1200px+）
- 桌面端：弹性网格布局
- 移动端：流式布局

## 文件结构

```
personal-website/
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── avatar.jpg          # 头像图片
├── life1.jpg/life2.jpg/life3.jpg  # 生活照
├── cuhk.png            # 香港中文大学Logo
├── tjnnu.png           # 天津师范大学Logo
└── README.md           # 使用指南
```

## 功能模块说明

### 1. 导航栏
- 固定顶部设计，滚动时背景渐变
- 桌面端：水平菜单
- 移动端：汉堡菜单

### 2. 英雄区
- 个人头像、姓名、职业标签
- 简短介绍和动效（渐入、悬浮缩放）

### 3. 关于我模块
- 图文混排，支持段落文本和关键技能标签展示

### 4. 作品集/项目展示模块
- 卡片式布局，hover 时有阴影和轻微上浮效果
- 支持图片懒加载

### 5. 联系方式模块
- 表单（姓名/邮箱/留言）
- 社交媒体图标（GitHub/LinkedIn/微信/微博）

### 6. 页脚
- 版权信息和快速导航链接

## 快速开始

1. **保存文件**：将所有文件保存到您的项目目录中
2. **启动服务器**：
   - 使用 Live Server 扩展（VS Code）
   - 或使用 Python 命令：`python -m http.server 8000`
3. **访问网站**：在浏览器中打开 `http://localhost:8000`

## 自定义参数

### 1. 颜色配置

在 `style.css` 文件中可以找到以下可自定义的颜色变量：

```css
/* 主色调 */
--primary-color: #8b9dc3;  /* 雾霾蓝 */
--secondary-color: #98d8c8;  /* 豆沙绿 */
--accent-color: #f0b429;  /* 浅卡其 */

/* 中性色 */
--light-bg: #f8f9fa;
--white: #ffffff;
--gray-light: #e5e7eb;
--gray-medium: #6b7280;
--gray-dark: #3a3a3a;
```

### 2. 字体配置

在 `style.css` 中修改字体配置：

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### 3. 布局配置

在 `style.css` 中修改响应式断点：

```css
/* 平板设备 */
@media (max-width: 768px) {
    /* 平板端样式 */
}

/* 移动设备 */
@media (max-width: 600px) {
    /* 移动端样式 */
}
```

### 4. 内容修改

在 `index.html` 中修改以下内容：

- 个人信息：姓名、职业、介绍
- 教育背景：学校、专业、时间
- 实习经历：公司、职位、职责
- 国际志愿：组织、项目、描述
- 核心技能：技能名称和描述
- 证书荣誉：证书名称和获得时间
- 联系方式：地址、电话、邮箱

### 5. 图片替换

将您自己的图片替换到以下位置：

- `avatar.jpg`：头像
- `life1.jpg/life2.jpg/life3.jpg`：生活照
- `cuhk.jpg`：香港中文大学Logo
- `tjnnu.jpg`：天津师范大学Logo

## 风格变体推荐

### 变体1：专业商务风格

```css
/* 主要颜色调整 */
--primary-color: #4a5568;  /* 深灰蓝 */
--secondary-color: #2d3748;  /* 深灰 */
--accent-color: #f56565;  /* 红色点缀 */

/* 字体调整 */
font-family: 'Poppins', sans-serif;
```

### 变体2：文艺清新风格

```css
/* 主要颜色调整 */
--primary-color: #68d391;  /* 薄荷绿 */
--secondary-color: #f093fb;  /* 浅粉紫 */
--accent-color: #4facfe;  /* 浅蓝色 */

/* 字体调整 */
font-family: 'Lato', sans-serif;
```

### 变体3：现代简约风格

```css
/* 主要颜色调整 */
--primary-color: #0077b6;  /* 蓝色 */
--secondary-color: #00b4d8;  /* 浅蓝 */
--accent-color: #90e0ef;  /* 淡蓝 */

/* 字体调整 */
font-family: 'Montserrat', sans-serif;
```

## 优化建议

### 1. 图片优化

- 使用压缩工具优化图片大小
- 为图片添加适当的 alt 属性
- 考虑使用 WebP 格式

### 2. 性能优化

- 启用图片懒加载
- 压缩 CSS 和 JavaScript 文件
- 避免使用过多的动画效果

### 3. 搜索引擎优化（SEO）

- 为每个页面添加适当的标题和元描述
- 使用语义化的 HTML 标签
- 优化图片文件名和 alt 属性

## 浏览器兼容性

网站兼容主流浏览器：
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱：liaoziya20242025@163.com
- 电话：+86 18873954545

---

**版本：1.0**
**更新日期：2026-02-27**
