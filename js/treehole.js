// treehole.js
document.addEventListener('DOMContentLoaded', () => {
    // 创建装饰树叶
    const decoPositions = ['deco-leaf-1', 'deco-leaf-2', 'deco-leaf-3', 'deco-leaf-4'];
    
    decoPositions.forEach(pos => {
        const leaf = document.createElement('div');
        leaf.className = `deco-leaf ${pos}`;
        leaf.innerHTML = '<i class="fas fa-leaf"></i>';
        document.querySelector('.treehole-letter').appendChild(leaf);
    });
    
    // 添加信件淡入效果
    const letterContent = document.querySelector('.letter-content');
    letterContent.style.opacity = '0';
    letterContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        letterContent.style.transition = 'opacity 1s ease, transform 1s ease';
        letterContent.style.opacity = '1';
        letterContent.style.transform = 'translateY(0)';
    }, 300);
});