// 工具函数：防抖（优化滚动监听性能，Replit 低性能环境更友好）
function debounce(fn, delay = 100) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// 1. 页面滚动时，板块渐显 + 导航高亮跟随
function handleScroll() {
    // 1.1 板块渐显逻辑
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // 优化触发条件：板块进入视口1/3时显示（更合理）
        if (sectionTop < windowHeight * 0.7) {
            section.classList.add('show');
        }
    });

    // 1.2 导航高亮跟随逻辑
    const navLinks = document.querySelectorAll('.nav-link');
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.getBoundingClientRect().top;
        // 当板块顶部进入视口顶部100px内，激活对应导航
        if (sectionTop < 100 && sectionTop > -windowHeight + 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 防抖处理滚动事件（Replit 性能优化核心）
window.addEventListener('scroll', debounce(handleScroll));

// 2. 页面加载时，触发一次滚动事件，让首屏板块显示
window.addEventListener('load', function() {
    handleScroll();
    // 初始化激活第一个导航项
    document.querySelector('.nav-link').classList.add('active');
});

// 3. 导航链接点击，平滑滚动到对应板块（优化锚点偏移）
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // 计算偏移量（适配固定导航，避免遮挡）
            const navHeight = document.querySelector('.nav-bar').offsetHeight;
            const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 20;
            // 平滑滚动
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
            // 手动激活点击的导航项
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// 4. Replit 预览适配：窗口大小变化时重新计算布局
window.addEventListener('resize', debounce(handleScroll));
