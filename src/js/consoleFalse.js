 // 禁止键盘事件
 document.onkeydown = function() {
     var e = window.event || arguments[0];
     //屏蔽F12
     if (e.keyCode == 123) {
         return false;
         //屏蔽Ctrl+Shift+I
     } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
         return false;
         //屏蔽Shift+F10
     } else if ((e.shiftKey) && (e.keyCode == 121)) {
         return false;
         // 屏蔽ctrl+U
     }else if ((e.ctrlKey) && (e.keyCode == 85)) {
         return false;
     }
 }
 // 监听控制台禁用debug调试方案
 if(window.location.href.indexOf('#debug')==-1){
     setInterval(function(){
         (function (a) {return (function (a) {return (Function('Function(arguments[0]+"' + a + '")()'))})(a)})('bugger')('de', 0, 0, (0, 0))
     }, 1000)
 }