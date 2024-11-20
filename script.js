document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to My Website!");
});

document.addEventListener("DOMContentLoaded", () => {
    const cloudsContainer = document.querySelector(".clouds");

    // 动态生成云朵
    function createCloud() {
        const cloud = document.createElement("img");
        cloud.src = "img/cloud.png"; // 云朵图片路径
        cloud.classList.add("cloud");

        // 随机设置云朵的位置和动画时间
        cloud.style.left = "100%"; // 初始位置在屏幕右侧
        cloud.style.bottom = `${Math.random() * 30 + 20}px`; // 调整高度，确保更低一些
        cloud.style.animationDuration = `${Math.random() * 5 + 40}s`; // 随机动画时间 (20-30秒)
        cloudsContainer.appendChild(cloud);

        // 监听云朵离开屏幕时移除
        cloud.addEventListener("animationend", () => {
            cloud.remove(); // 云朵移出左侧边框后移除
        });
    }

    // 定时生成云朵
    setInterval(createCloud, 3000); // 每隔3秒生成一朵云
});
