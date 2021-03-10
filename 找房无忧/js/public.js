/*
 * @Descripttion: XXT
 * @version: 1.0
 * @@Company: DCIT-SH
 * @Date: 2021-03-09 15:50:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-09 15:52:00
 */
function setRem() {
    // 当前设计稿的宽度
    var uiw = 640,
        // 当前屏幕的宽度
        win = document.documentElement.clientWidth || document.body.clientWidth;
    // rem值=屏幕的宽度比上设计稿的宽度（自动变化）
    document.documentElement.style.fontSize = (win / uiw) * 100 + 'px';
}

setRem();
window.onresize = setRem;