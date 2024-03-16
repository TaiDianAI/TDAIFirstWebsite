// 当网页加载完毕时
window.onload = function() {
    // 获取标题元素
    var title = document.querySelector('h1');
    // 当标题被点击时，改变其文本
    title.onclick = function() {
        title.textContent = '你点击了标题！';
    }
}
