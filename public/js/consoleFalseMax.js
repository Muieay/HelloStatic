document.onkeydown=function(){var e=window.event||arguments[0];return 123!=e.keyCode&&((!e.ctrlKey||!e.shiftKey||73!=e.keyCode)&&((!e.shiftKey||121!=e.keyCode)&&((!e.ctrlKey||85!=e.keyCode)&&((!e.ctrlKey||!e.shiftKey||67!=e.keyCode)&&void 0))))},window.addEventListener("contextmenu",(function(e){e.preventDefault()})),window.notAllowDebugger=function(){},setInterval((function(){let e=Date.now();notAllowDebugger(),Date.now()-e>=100&&window.location.replace("about:blank")}),1e3);