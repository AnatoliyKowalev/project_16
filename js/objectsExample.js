// Порожній об'єкт / Порожня коробка
{
}

// Об'єкт з полем "apple", яке має значення "red" / Коробка з червоним яблуком
{
  apple: "red";
}

// Об'єкт полями фруктів, і з одним полем "телефон" / Коробка в якій лежать фрукти (червоне та зелене яблука, маленький банан), та телефон LG
{
  apple: "red";
  apple: "green";
  banana: "small";
  phone: "LG";
}

// Об'єкт в якому усі поля згруповані
{
  fruits: {
    apple: "red";
    apple: "green";
    banana: "small";
  }
  gadgets: {
    phone: "LG";
  }
}

// Об'єкт в якому є метод "displayBananaSize", це функція яка виводить в консоль розмір банану
{
  displayBananaSize: () => {
    console.log("small");
  };
}