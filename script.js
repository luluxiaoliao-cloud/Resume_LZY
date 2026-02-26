// 1. 页面滚动时，板块渐显（核心文字动效）
window.addEventListener('scroll', function() {
    // 获取所有板块
    const sections = document.querySelectorAll('.section');
    // 遍历每个板块
    sections.forEach(section => {
        // 获取板块顶部距离页面顶部的距离
        const sectionTop = section.getBoundingClientRect().top;
        // 当板块进入视口（距离顶部小于500px），添加显示类
        if (sectionTop < 500) {
            section.classList.add('show');
        }
    });
});

// 2. 页面加载时，触发一次滚动事件，让首屏板块显示
window.addEventListener('load', function() {
    window.dispatchEvent(new Event('scroll'));
});

// 3. 导航链接点击，平滑滚动到对应板块
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // 阻止默认跳转
        e.preventDefault();
        // 获取目标板块ID
        const targetId = this.getAttribute('href');
        // 平滑滚动到目标板块
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});