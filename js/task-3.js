function checkForSpam(message) {
  // Перетворюємо рядок до нижнього регістру для регістронезалежної перевірки
  const normalizedMessage = message.toLowerCase();
  // Перевіряємо, чи містить рядок слова "spam" або "sale"
  const hasSpam = normalizedMessage.includes('spam');
  const hasSale = normalizedMessage.includes('sale');

  // Якщо знайдено хоча б одне заборонене слово, повертаємо true
  return hasSpam || hasSale;
}

// для ментора
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
