@echo off
echo ==========================================
echo       ChefCode Landing - Git Push Helper
echo ==========================================
echo.
echo Adding all changes to staging...
git add .
echo.

set /p commitMsg="Enter your commit message: "
if "%commitMsg%"=="" set commitMsg="Auto-update"

echo.
echo Committing with message: "%commitMsg%"...
git commit -m "%commitMsg%"
echo.

echo Pushing to GitHub...
git push
echo.

if %errorlevel% equ 0 (
    echo [SUCCESS] Push completed successfully!
) else (
    echo [ERROR] Push failed. Please check your connection or conflicts.
)

echo.
pause
