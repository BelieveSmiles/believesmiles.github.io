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