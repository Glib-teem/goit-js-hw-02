function getElementWidth(content, padding, border) {
  // відокремлюємо px
  const contentWidth = parseFloat(content); // число внутрішньої ширини
  const paddingWidth = parseFloat(padding); // число падінгу з боку
  const borderWidth = parseFloat(border); // число рамки з боку

  // рахуємо заг. ширину (вн. шир + л.падінг + п.падінг + л.рамка + п.рамка)
  const totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2;

  // порахований результат
  return totalWidth;
}

// для ментора (проблеми тільки з гітом, локально працює)
console.log(getElementWidth('50px', '8px', '4px')); // Очікуємо: 74
console.log(getElementWidth('60px', '12px', '8.5px')); // Очікуємо: 101
console.log(getElementWidth('200px', '0px', '0px')); // Очікуємо: 200
