/* 金毛犬习性介绍网站 - 交互脚本 */
(function () {
    'use strict';

    // 移动端导航菜单
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 640) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // 滚动时导航栏阴影
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 20) {
                siteHeader.style.boxShadow = '0 4px 20px rgba(10, 36, 99, 0.12)';
            } else {
                siteHeader.style.boxShadow = '0 2px 8px rgba(10, 36, 99, 0.06)';
            }
        }, { passive: true });
    }

    // 元素进入视口淡入
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

        const animateElements = document.querySelectorAll(
            '.overview-card, .feature-item, .trait-box, .exercise-card, ' +
            '.habit-list li, .stage-item, .groom-card, .training-card, ' +
            '.disease-card, .vax-stage, .deworm-card, .check-item, ' +
            '.behavior-block, .env-item'
        );

        animateElements.forEach(function (el, index) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.5s ease ' + (index % 4 * 0.08) + 's, transform 0.5s ease ' + (index % 4 * 0.08) + 's';
            observer.observe(el);
        });
    }
})();
