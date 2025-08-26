/**
 * @param<string> title 名字
 * @param<string> year 创作日期
 * @param<string> size 大小
 * @param<string> image 地址
 * @param<string> description 介绍
 * @param<string> technique 类似于方式
 */


const artworks = [
    {
        title: "方大同",
        year: "2025",
        size: "未知",
        image: "Pictures/方大同.jpg",
        description: "听歌时候听到方大同的歌，看到专辑封面很好看就随便画下来了",
        technique: "油画 / 画世界"
    }, {
        title: "毛泽东",
        year: "2025",
        size: "未知",
        image: "Pictures/毛泽东.jpg",
        description: "感觉主席没画好，到时候有时间绝对画个好的",
        technique: "油画 / 画世界"
    }, {
        title: "彭于晏",
        year: "2025",
        size: "未知",
        image: "Pictures/彭于晏.jpg",
        description: "画布是不一样的，第一次水彩的厚涂，这种画风自己很爱",
        technique: "水彩 / 画世界"
    }, {
        title: "心理老师",
        year: "2025",
        size: "未知",
        image: "Pictures/心理老师.jpg",
        description: "心理老师的离别礼物，侵权删",
        technique: "油画 / 画世界"
    }, {
        title: "语文老师",
        year: "2025",
        size: "未知",
        image: "Pictures/语文老师.jpg",
        description: "语文老师的离别礼物，感觉脸画得怪怪的，侵权删",
        technique: "油画 / 画世界"
    }
];

// DOM
const artworkGrid = document.getElementById('artwork-grid');
const modal = document.getElementById('artwork-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalYear = document.getElementById('modal-year');
const modalSize = document.getElementById('modal-size');
const modalDescription = document.getElementById('modal-description');
const modalTechnique = document.getElementById('modal-technique');

// 初始化
function initGallery() {
    renderArtworks(artworks);
}

// 渲染
function renderArtworks(artworksArray) {
    artworkGrid.innerHTML = '';

    artworksArray.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.className = 'artwork-item';
        artworkElement.setAttribute('data-category', artwork.category);
        artworkElement.setAttribute('data-id', artwork.id);

        artworkElement.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" class="artwork-img">
            <div class="artwork-info">
                <h3 class="artwork-title">${artwork.title}</h3>
                <div class="artwork-year">${artwork.year}</div>
            </div>
        `;

        // 点击事件
        artworkElement.addEventListener('click', () => {
            openModal(artwork);
        });

        artworkGrid.appendChild(artworkElement);
    });
}

// 打开模态窗口
function openModal(artwork) {
    modalImg.src = artwork.image;
    modalImg.alt = artwork.title;
    modalTitle.textContent = artwork.title;
    modalYear.textContent = artwork.year;
    modalSize.textContent = artwork.size;
    modalDescription.textContent = artwork.description;
    modalTechnique.textContent = artwork.technique;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭模态窗口
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
}

// 事件监听
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', initGallery);