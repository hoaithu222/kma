const fs = require('fs');
const path = require('path');

const colorsPath = path.join(__dirname, 'src/foundation/styles/color/colors.json');
const colorsJson = JSON.parse(fs.readFileSync(colorsPath, 'utf8'));


const buildColors = (colorObj) => {
  const result = {};
  for (const [key] of Object.entries(colorObj)) {
    result[key] = `var(--color-${key})`;
  }
  return result;
};

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: buildColors(colorsJson.light),
    },
  },
  // rất quan trọng để bật class .dark
  keyframes: {
    // ... keep existing keyframes
    'gradient-x': {
      '0%, 100%': {
        'background-position': '0% 50%'
      },
      '50%': {
        'background-position': '100% 50%'
      }
    }
  },
  animation: {
    // ... keep existing animations
    "gradient-x": "gradient-x 3s ease infinite",
  },
};
