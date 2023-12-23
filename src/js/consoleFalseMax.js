// 禁止键盘事件
document.onkeydown = function() {
  var e = window.event || arguments[0]
  //屏蔽F12
  if (e.keyCode == 123) {
    return false
    //屏蔽Ctrl+Shift+I
  } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
    return false
    //屏蔽Shift+F10
  } else if ((e.shiftKey) && (e.keyCode == 121)) {
    return false
    // 屏蔽ctrl+U
  } else if ((e.ctrlKey) && (e.keyCode == 85)) {
    return false
  } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 67)) {
    return false
  }
}
// 禁止右键
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// 监听控制台禁用debug调试方案
window.notAllowDebugger = function notAllow(){
  debugger;
}
setInterval(function (){
  let time1 = Date.now();
  notAllowDebugger();
  let time2 = Date.now()
  if(time2 - time1 >= 100){
    window.location.replace('about:blank');
  }
},1000)

