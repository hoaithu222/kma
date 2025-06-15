import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const viDir = path.resolve('src/i18n/locales/vi');
const enDir = path.resolve('src/i18n/locales/en');

async function translateJsonFile(viFilePath, enFilePath) {
  const viContent = await fs.readFile(viFilePath, 'utf-8');
  const viJson = JSON.parse(viContent);

  let enJson = {};
  try {
    const enContent = await fs.readFile(enFilePath, 'utf-8');
    enJson = JSON.parse(enContent);
  } catch (err) {
    console.log(`ℹ️ English file not found. Will create new: ${enFilePath}`);
  }

  const translatedJson = { ...enJson }; // giữ lại các bản dịch cũ nếu có

  for (const [key, viText] of Object.entries(viJson)) {
    if (translatedJson[key]) {
      console.log(`✅ ${key}: Exists`);
      continue; // đã có, bỏ qua
    }

    // Nếu chưa có, gán "[TODO] ..."
    translatedJson[key] = `[TODO] ${viText}`;
    console.log(`🆕 ${key}: Added with [TODO]`);
  }

  await fs.mkdir(path.dirname(enFilePath), { recursive: true });
  await fs.writeFile(enFilePath, JSON.stringify(translatedJson, null, 2), 'utf-8');
  console.log(`✅ Updated/Created file: ${enFilePath}`);
}

async function run() {
  try {
    const files = await fs.readdir(viDir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const viFilePath = path.join(viDir, file);
        const enFilePath = path.join(enDir, file);
        await translateJsonFile(viFilePath, enFilePath);
      }
    }
    console.log('🎉 All files translated!');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

run();
