document.addEventListener('DOMContentLoaded', () => {
  const swatches = document.querySelectorAll('.color-swatch');
  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      const hexValue = swatch.getAttribute('data-hex');
      if (hexValue) {
        navigator.clipboard.writeText(hexValue);
      }
      if (!swatch.querySelector('.copy-tooltip')) {
        const tooltip = document.createElement('span');
        tooltip.classList.add('copy-tooltip');
        tooltip.textContent = 'Copied!';
        swatch.appendChild(tooltip);
        setTimeout(() => {
          tooltip.remove();
        }, 2000);
      }
    });
  });
});
