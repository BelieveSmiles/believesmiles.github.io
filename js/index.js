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

// 侧边导航栏交互
document.addEventListener('DOMContentLoaded', () => {
    const sidebarNav = document.querySelector('.sidebar-nav');
    const navItems = document.querySelectorAll('.nav-links li a');
    
    // 添加点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有活跃状态
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // 添加当前项活跃状态
            this.classList.add('active');
        });
    });
    
    // 移动设备触摸事件
    let touchStartX = 0;
    let touchEndX = 0;
    
    sidebarNav.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    sidebarNav.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            sidebarNav.classList.remove('expanded');
        }
        if (touchEndX > touchStartX) {
            sidebarNav.classList.add('expanded');
        }
    }
});