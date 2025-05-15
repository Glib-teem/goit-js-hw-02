function getShippingCost(country) {
  let price; // Змінна для зберігання вартості доставки
  let message; // Змінна для зберігання повідомлення

  // Використовуємо інструкцію switch для визначення вартості доставки

  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break; // Зупиняємо виконання switch після знайденого case

    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      // Якщо країна не знайдена у жодному з case, виконується default

      message = 'Sorry, there is no delivery to your country';
  }

  // Повертаємо сформоване повідомлення

  return message;
}

// для ментора
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
