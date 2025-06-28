// 处理所有页面加载情况
window.addEventListener('beforeunload', () => {
    // 在页面卸载前强制滚动到顶部
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
    // 兼容异步加载内容
    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
});
// 顶部视频随机播放
const mp4_list = [
    "Naruto-White-Kurama-4K.mp4",
    "Toy-Aeroplane-4K.mp4"
];
const current = mp4_list[Math.floor(Math.random() * mp4_list.length)];
document.getElementById("bg-video").src = current;

// 滚动特效
const sections = document.querySelectorAll('.content-section, .signature-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

function adjustHeaderHeight() {
    const header = document.querySelector('.header-container');
    header.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', adjustHeaderHeight);
adjustHeaderHeight();

// 添加悬停效果
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// 圆形按钮悬停效果
document.querySelectorAll('footer .social-links a, .section-3 a').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-8px) scale(1.1)';
        btn.style.background = 'rgba(168, 198, 219, 0.2)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'none';
        btn.style.background = '#f8f9fa';
    });
});

// 按钮悬停
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });
});