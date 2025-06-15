import fs from 'fs/promises';
import path from 'path';

const viDir = path.resolve('src/i18n/locales/vi');
const enDir = path.resolve('src/i18n/locales/en');

// Hàm thêm giá trị vào object lồng nhau theo path key
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key];
    }
  });
}

// Đệ quy lấy tất cả các key theo định dạng a.b.c
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

// So sánh và cập nhật key còn thiếu giữa hai file
async function compareAndFixTranslations(viFilePath, enFilePath) {
  try {
    const viContent = await fs.readFile(viFilePath, 'utf-8');
    const enContent = await fs.readFile(enFilePath, 'utf-8');

    const viJson = JSON.parse(viContent);
    const enJson = JSON.parse(enContent);

    const viKeys = await getAllKeys(viJson);
    const enKeys = await getAllKeys(enJson);

    const missingInEn = viKeys.filter(key => !enKeys.includes(key));
    const missingInVi = enKeys.filter(key => !viKeys.includes(key));

    let daCapNhat = false;

    if (missingInEn.length > 0 || missingInVi.length > 0) {
      console.log(`\n🔍 So sánh file ${path.basename(viFilePath)} và ${path.basename(enFilePath)}:`);

      if (missingInEn.length > 0) {
        console.log('\n❌ Thiếu key trong file English (đã tự động thêm):');
        missingInEn.forEach(key => {
          console.log(`  ➕ ${key}`);
          setNestedValue(enJson, key, '[TODO]');
        });
        daCapNhat = true;
        await fs.writeFile(enFilePath, JSON.stringify(enJson, null, 2), 'utf-8');
      }

      if (missingInVi.length > 0) {
        console.log('\n❌ Thiếu key trong file Vietnamese (đã tự động thêm):');
        missingInVi.forEach(key => {
          console.log(`  ➕ ${key}`);
          setNestedValue(viJson, key, '[TODO]');
        });
        daCapNhat = true;
        await fs.writeFile(viFilePath, JSON.stringify(viJson, null, 2), 'utf-8');
      }
    } else {
      console.log(`✅ File ${path.basename(viFilePath)} và ${path.basename(enFilePath)} đã đồng bộ.`);
    }

    return { missingInEn, missingInVi, daCapNhat };
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`⚠️ Không tìm thấy file: ${error.path}`);
      return { missingInEn: [], missingInVi: [], daCapNhat: false };
    }
    console.error(`❌ Lỗi đọc hoặc xử lý file: ${error.message}`);
    return { missingInEn: [], missingInVi: [], daCapNhat: false };
  }
}

// Hàm chính để quét toàn bộ file trong thư mục
async function main() {
  try {
    const viFiles = await fs.readdir(viDir);

    for (const file of viFiles) {
      if (file.endsWith('.json')) {
        const viFilePath = path.join(viDir, file);
        const enFilePath = path.join(enDir, file);

        await compareAndFixTranslations(viFilePath, enFilePath);
      }
    }

    console.log('\n✅ Đã hoàn tất kiểm tra và cập nhật bản dịch!');
  } catch (error) {
    console.error('❌ Lỗi hệ thống:', error);
  }
}

main();
