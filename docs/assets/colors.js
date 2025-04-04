// https://davidmathlogic.com/colorblind/#%230050A0-%23E5B700-%23E84A33-%23FF8029-%2384451E-%23E061DE-%23FF00AD-%234E326C-%2360AE60-%23808080-%236EC1C1-%23FF8029
const colors = [
  {
    family: 'BLUE',
    shades: [
      { hex: '#0050A0', rgb: '(0,80,160)' },
      { hex: '#092B61', rgb: '(9,43,97)' },
      { hex: '#3A8FE4', rgb: '(58,143,228)' }
    ]
  },
  {
    family: 'YELLOW',
    shades: [
      { hex: '#E5B700', rgb: '(229,183,0)' },
      //   { hex: '#FFCC00', rgb: '(255,204,0)' },
      { hex: '#CE9A0E', rgb: '(206,154,14)' },
      { hex: '#FFE066', rgb: '(255,224,102)' }
    ]
  },
  {
    family: 'ORANGE',
    shades: [
      { hex: '#FF8029', rgb: '(255,128,41)' },
      { hex: '#DC5900', rgb: '(220,89,0)' },
      { hex: '#FFC29D', rgb: '(255,194,157)' }
    ]
  },
  {
    family: 'RED',
    shades: [
      { hex: '#E84A33', rgb: '(232,74,51)' },
      { hex: '#A4220F', rgb: '(164,34,15)' },
      { hex: '#F48D7E', rgb: '(244,141,126)' }
    ]
  },
  {
    family: 'BROWN',
    shades: [
      { hex: '#84451E', rgb: '(132,69,30)' },
      { hex: '#59280A', rgb: '(89,40,10)' },
      { hex: '#A56034', rgb: '(165,96,52)' }
    ]
  },

  {
    family: 'PINK',
    shades: [
      { hex: '#E961B9', rgb: '(233,97,185)' },
      { hex: '#A91374', rgb: '(169,19,116)' },
      { hex: '#F6B0DD', rgb: '(246,176,221)' }
    ]
  },
  {
    family: 'PURPLE',
    shades: [
      { hex: '#A957BE', rgb: '(169,87,190)' },
      { hex: '#7C2377', rgb: '(124,35,119)' },
      { hex: '#E093F4', rgb: '(224,147,244)' }
    ]
  },
  {
    family: 'VIOLET',
    shades: [
      { hex: '#4E326C', rgb: '(78,50,108)' },
      { hex: '#3C124C', rgb: '(60,18,76)' },
      { hex: '#9C7DBE', rgb: '(156,125,190)' }
    ]
  },

  {
    family: 'CYAN',
    shades: [
      // { hex: '#3DCFCF', rgb: '(61,207,207)' },
      { hex: '#2AC9CE', rgb: '(43,207,212)' },
      { hex: '#1A7C7F', rgb: '(26,124,127)' },
      { hex: '#80E2E5', rgb: '(128,226,229)' }
    ]
  },
  {
    family: 'GREEN',
    shades: [
      { hex: '#60AE60', rgb: '(96,174,96)' },
      { hex: '#2E6E2E', rgb: '(46,110,46)' },
      { hex: '#95D395', rgb: '(149,211,149)' }
    ]
  },
  {
    family: 'GREY',
    shades: [
      { hex: '#808080', rgb: '(128,128,128)' },
      { hex: '#202020', rgb: '(32,32,32)' },
      { hex: '#A2A2A2', rgb: '(162,162,162)' }
    ]
  }
];

/**
 * An object containing matrices for simulating different types of color blindness.
 * Each matrix is a 3x3 array representing the transformation to apply to RGB values.
 *
 * @type {Object.<string, number[][]>}
 * @property {number[][]} normal - Matrix for normal vision.
 * @property {number[][]} deuteranopia - Matrix for deuteranopia (red-green color blindness).
 * @property {number[][]} protanopia - Matrix for protanopia (red-green color blindness).
 * @property {number[][]} tritanopia - Matrix for tritanopia (blue-yellow color blindness).
 * @property {number[][]} achromatopsia - Matrix for achromatopsia (complete color blindness).
 */
const colorBlindnessMatrices = {
  normal: [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0]
  ],
  deuteranopia: [
    [0.43, 0.72, -0.15],
    [0.34, 0.57, 0.09],
    [-0.02, 0.03, 1.0]
  ],
  protanopia: [
    [0.2, 0.8, 0.0],
    [0.26, 0.7, 0.04],
    [0.0, 0.0, 1.0]
  ],
  tritanopia: [
    [0.95, 0.05, 0.0],
    [0.0, 0.43, 0.56],
    [0.0, 0.47, 0.53]
  ],
  achromatopsia: [
    [0.3, 0.59, 0.11],
    [0.3, 0.59, 0.11],
    [0.3, 0.59, 0.11]
  ]
};

/**
 * @type {HTMLDivElement}
 */
// @ts-ignore
const topContainer = document.getElementById('by-colors');
/**
 * @type {HTMLDivElement}
 */
// @ts-ignore
const container = document.getElementById('all-colors');

/**
 * @type {string}
 */
let selectedBlindnessType = 'normal';

function updateColors() {
  topContainer.innerHTML = '';
  container.innerHTML = '';
  colors.forEach((color, index) => {
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');

    color.shades.forEach((shade, index) => {
      const colorSwatch = document.createElement('div');
      colorSwatch.classList.add('color-swatch');
      colorSwatch.setAttribute('data-hex', shade.hex.slice(1));
      colorSwatch.setAttribute('data-rgb', shade.rgb);
      colorSwatch.style.backgroundColor = simulateColorBlindness(
        shade.hex,
        selectedBlindnessType
      );

      const span = document.createElement('span');
      const family_name =
        color.family.charAt(0).toUpperCase() +
        color.family.slice(1).toLowerCase();
      span.innerHTML = `${family_name}:<br />${shade.hex}<br />${shade.rgb}`;
      colorSwatch.appendChild(span);

      if (index === 0) {
        colorBlock.appendChild(colorSwatch);
      } else {
        const shadesRow =
          colorBlock.querySelector('.shades-row') ||
          document.createElement('div');
        shadesRow.classList.add('shades-row');
        shadesRow.appendChild(colorSwatch);
        if (!colorBlock.querySelector('.shades-row')) {
          colorBlock.appendChild(shadesRow);
        }
      }
    });

    if (index < 2) {
      topContainer.appendChild(colorBlock);
    } else {
      container.appendChild(colorBlock);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateColors();
  const swatches = document.querySelectorAll('.color-swatch');
  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch.copied').forEach((el) => {
        el.classList.remove('copied');
      });
      const hexValue = swatch.getAttribute('data-hex');
      if (hexValue) {
        navigator.clipboard.writeText(hexValue);
      }
      swatch.classList.add('copied');
      setTimeout(() => {
        swatch.classList.remove('copied');
      }, 1000);
    });
  });
  document.querySelectorAll('.blindness-button').forEach((button) => {
    // @ts-ignore
    button.addEventListener('click', selectBlindnessType);
  });
});

/**
 * @param {{ target: { classList: { add: (arg0: string) => void; }; getAttribute: (arg0: string) => string | null; }}} event
 */
function selectBlindnessType(event) {
  document.querySelectorAll('.blindness-button').forEach((button) => {
    button.classList.remove('selected');
  });
  event.target.classList.add('selected');
  // @ts-ignore
  selectedBlindnessType = event.target.getAttribute('data-type');
  updateColors();
}

/**
 * @param {string} hex
 */
function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
function rgbToHex(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

/**
 * @param {string} hex
 * @param {string} type
 */
function simulateColorBlindness(hex, type) {
  if (type === 'normal') {
    return hex;
  }
  const { r, g, b } = hexToRgb(hex);
  const matrix = colorBlindnessMatrices[type];

  let newR = matrix[0][0] * r + matrix[0][1] * g + matrix[0][2] * b;
  let newG = matrix[1][0] * r + matrix[1][1] * g + matrix[1][2] * b;
  let newB = matrix[2][0] * r + matrix[2][1] * g + matrix[2][2] * b;

  newR = Math.min(255, Math.max(0, newR));
  newG = Math.min(255, Math.max(0, newG));
  newB = Math.min(255, Math.max(0, newB));

  return rgbToHex(Math.round(newR), Math.round(newG), Math.round(newB));
}

/**
 * @param {MouseEvent} event
 */
function copyCode(event) {
  const codeElement = document.getElementById('pip-code-block');
  // @ts-ignore
  navigator.clipboard.writeText(codeElement?.innerText.trim());

  // @ts-ignore
  event.target.innerText = 'Copied!';
  setTimeout(() => {
    // @ts-ignore
    event.target.innerText = 'Copy';
  }, 1500);
}
