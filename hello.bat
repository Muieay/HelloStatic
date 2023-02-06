@echo off
F:
cd F:\Muieay\HelloStatic
call gulp
call git add .
call git commit -m "update"
call npm version patch
call git push
pause