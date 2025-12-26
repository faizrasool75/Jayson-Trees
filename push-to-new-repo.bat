@echo off
cd /d "%~dp0"
echo Checking git status...
git status
echo.
echo Staging changes...
git add .
echo.
echo Committing changes...
git commit -m "Update CSS styles: h2 font-size to 36px, mobile menu to semi-bold"
echo.
echo Removing old remote...
git remote remove origin
echo.
echo Adding new remote...
git remote add origin https://github.com/faizrasool75/Jayson-Trees.git
echo.
echo Pushing to new repository...
git push -u origin main
echo.
echo Done! Project successfully pushed to new repository.
pause

