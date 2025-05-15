function getShippingMessage(country, price, deliveryFee) {
  // рахуємо товар + доставку
  const totalPrice = price + deliveryFee;

  // шаблонне речення (країна + загальна вартість)
  const message = `Shipping to ${country} will cost ${totalPrice} credits`;

  // повертаємо повідомлення
  return message;
}

// для ментора (проблеми тільки з гітом, локально працює)
console.log(getShippingMessage('Australia', 120, 50)); // Очікуємо: "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // Очікуємо: "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // Очікуємо: "Shipping to Sweden will cost 120 credits"
