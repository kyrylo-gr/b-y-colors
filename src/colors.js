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
    family: 'RED',
    shades: [
      { hex: '#E84A33', rgb: '(232,74,51)' },
      { hex: '#A4220F', rgb: '(164,34,15)' },
      { hex: '#F48D7E', rgb: '(244,141,126)' }
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
    family: 'GREEN',
    shades: [
      { hex: '#60AE60', rgb: '(96,174,96)' },
      { hex: '#2E6E2E', rgb: '(46,110,46)' },
      { hex: '#95D395', rgb: '(149,211,149)' }
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
    family: 'ORANGE',
    shades: [
      { hex: '#FF8029', rgb: '(255,128,41)' },
      { hex: '#DC5900', rgb: '(220,89,0)' },
      { hex: '#FFC29D', rgb: '(255,194,157)' }
    ]
  },
  {
    family: 'CYAN',
    shades: [
      { hex: '#3DCFCF', rgb: '(61,207,207)' },
      { hex: '#1E6767', rgb: '(30,103,103)' },
      { hex: '#9EE7E7', rgb: '(158,231,231)' }
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
    family: 'GREY',
    shades: [
      { hex: '#808080', rgb: '(128,128,128)' },
      { hex: '#202020', rgb: '(32,32,32)' },
      { hex: '#A2A2A2', rgb: '(162,162,162)' }
    ]
  }
];

const topContainer = document.getElementById('by-colors');
const container = document.getElementById('all-colors');

colors.forEach((color, index) => {
  const colorBlock = document.createElement('div');
  colorBlock.classList.add('color-block');

  color.shades.forEach((shade, index) => {
    const colorSwatch = document.createElement('div');
    colorSwatch.classList.add('color-swatch');
    colorSwatch.setAttribute('data-hex', shade.hex.slice(1));
    colorSwatch.setAttribute('data-rgb', shade.rgb);
    colorSwatch.style.backgroundColor = shade.hex;

    const span = document.createElement('span');
    span.innerHTML = `${shade.hex}<br />${shade.rgb}`;
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

document.addEventListener('DOMContentLoaded', () => {
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
});
