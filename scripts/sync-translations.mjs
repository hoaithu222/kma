import fs from 'fs/promises';
import path from 'path';

const viDir = path.resolve('src/i18n/locales/vi');
const enDir = path.resolve('src/i18n/locales/en');

async function getAllKeys(obj, prefix = '') {
    let keys = [];
    for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'object' && value !== null) {
            keys = keys.concat(await getAllKeys(value, newKey));
        } else {
            keys.push(newKey);
        }
    }
    return keys;
}

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current)) {
            current[key] = {};
        }
        current = current[key];
    }

    current[keys[keys.length - 1]] = value;
}

function getNestedValue(obj, path) {
    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
        if (!(key in current)) {
            return undefined;
        }
        current = current[key];
    }

    return current;
}

async function syncTranslations(viFilePath, enFilePath) {
    try {
        const viContent = await fs.readFile(viFilePath, 'utf-8');
        let enContent;
        try {
            enContent = await fs.readFile(enFilePath, 'utf-8');
        } catch (error) {
            if (error.code === 'ENOENT') {
                enContent = '{}';
            } else {
                throw error;
            }
        }

        const viJson = JSON.parse(viContent);
        const enJson = JSON.parse(enContent);

        const viKeys = await getAllKeys(viJson);
        const enKeys = await getAllKeys(enJson);

        let hasChanges = false;

        // Add missing keys to English
        for (const key of viKeys) {
            if (!enKeys.includes(key)) {
                const viValue = getNestedValue(viJson, key);
                setNestedValue(enJson, key, `[TODO] ${viValue}`);
                hasChanges = true;
                console.log(`➕ Added to English: ${key}`);
            }
        }

        // Add missing keys to Vietnamese
        for (const key of enKeys) {
            if (!viKeys.includes(key)) {
                const enValue = getNestedValue(enJson, key);
                setNestedValue(viJson, key, `[TODO] ${enValue}`);
                hasChanges = true;
                console.log(`➕ Added to Vietnamese: ${key}`);
            }
        }

        if (hasChanges) {
            // Ensure directory exists
            await fs.mkdir(path.dirname(enFilePath), { recursive: true });

            // Write updated files
            await fs.writeFile(enFilePath, JSON.stringify(enJson, null, 2), 'utf-8');
            await fs.writeFile(viFilePath, JSON.stringify(viJson, null, 2), 'utf-8');

            console.log(`\n✅ Updated files: ${path.basename(viFilePath)} and ${path.basename(enFilePath)}`);
        } else {
            console.log(`\n✨ No changes needed for ${path.basename(viFilePath)}`);
        }

    } catch (error) {
        console.error(`Error processing ${path.basename(viFilePath)}:`, error);
    }
}

async function main() {
    try {
        const viFiles = await fs.readdir(viDir);

        for (const file of viFiles) {
            if (file.endsWith('.json')) {
                const viFilePath = path.join(viDir, file);
                const enFilePath = path.join(enDir, file);

                await syncTranslations(viFilePath, enFilePath);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
