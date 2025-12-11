// --- 1. 資料結構定義 (飲料品牌列表 - 高雄在地化) ---
const BEVERAGE_BRANDS = [
    "五十嵐 (Ice Tea)",
    "清心福全 (Ching Shin)",
    "迷客夏 (Milkshop)",
    "可不可熟成紅茶 (Kebuke)",
    "麻古茶坊 (Macu Tea)",
    "大苑子 (DaYung's)",
    "星巴克 (Starbucks)",
    "珍煮丹 (Truedan)",
    "茶湯會 (TP Tea)",
    "八曜和茶 (Bayao Tea)",
    "春水堂 (Chun Shui Tang)",
    "老賴紅茶 (Laolai)",
    "三分春茶 (Sanfen Tea)",
    "龜記茗品 (Gui Ji)",
    "CoCo都可 (CoCo)",
];

// --- 2. 程式主邏輯：隨機選擇 ---
function decideBrand() {
    // 核心決策邏輯：使用 Math.random() 搭配陣列索引進行隨機選擇
    // Math.floor(Math.random() * array.length) 確保索引在範圍內
    
    const randomIndex = Math.floor(Math.random() * BEVERAGE_BRANDS.length);
    const chosenBrand = BEVERAGE_BRANDS[randomIndex];
    
    // 將結果顯示在 HTML 頁面上
    document.getElementById('result').innerText = `🎯 今天就喝：${chosenBrand}`;
    
    // 可選：將按鈕變色或加入動畫來增加趣味性
    const button = document.querySelector('button');
    button.style.backgroundColor = '#5cb85c'; // 變綠色
}

// --- 3. 輔助功能：加載品牌列表到 HTML ---
// 這讓使用者可以知道有哪些選項
function loadBrandList() {
    const listContainer = document.getElementById('brandList');
    let htmlContent = '<h3>可選品牌 (' + BEVERAGE_BRANDS.length + ' 間):</h3><ul>';
    
    BEVERAGE_BRANDS.forEach(brand => {
        htmlContent += `<li>${brand}</li>`;
    });
    
    htmlContent += '</ul>';
    listContainer.innerHTML = htmlContent;
}

// 頁面加載完成後，執行一次加載品牌列表
window.onload = loadBrandList;
