// 1. 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

// 2. 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// 3. 页面滚动时，板块渐显（核心文字动效）
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

// 4. 页面加载时，触发一次滚动事件，让首屏板块显示
window.addEventListener('load', function() {
    window.dispatchEvent(new Event('scroll'));
});

// 5. 导航链接点击，平滑滚动到对应板块
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

// 6. 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// 7. 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
