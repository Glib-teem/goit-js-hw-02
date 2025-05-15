function makeTransaction(quantity, pricePerDroid) {
  //Загальна вартість (кількість * ціна за одиницю)
  const totalPrice = quantity * pricePerDroid;

  //Використовуємо шаблон (підставляючи кількість і ціну)
  const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;

  //повертаємо повідомлення
  return message;
}

// для ментора (проблеми тільки з гітом, локально працює)
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
