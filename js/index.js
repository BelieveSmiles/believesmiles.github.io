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
document.addEventListener('touchstart', function () { }, true);

const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.3
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