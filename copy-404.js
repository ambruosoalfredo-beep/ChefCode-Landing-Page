import fs from 'fs';
import path from 'path';

try {
    const source = 'dist/index.html';
    const destination = 'dist/404.html';

    if (fs.existsSync(source)) {
        fs.copyFileSync(source, destination);
        console.log('✅ Success: Copied dist/index.html to dist/404.html for SPA fallback.');
    } else {
        console.warn('⚠️ Warning: dist/index.html does not exist. Make sure to run this script AFTER vite build.');
        process.exit(1);
    }
} catch (error) {
    console.error('❌ Error copying file:', error);
    process.exit(1);
}
