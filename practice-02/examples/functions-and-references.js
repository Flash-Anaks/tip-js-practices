// Эксперимент 1. Объявление функции
function add(a, b) {
  return a + b;
}
console.log("1.", add(2, 3));

// Эксперимент 2. Возврат значения из функции
const square = (value) => {
  return value * value;
};
console.log("2.", square(4));

// Эксперимент 3. Передача примитивного значения
let number = 10;
function changeNumber(value) {
  value = 20;
}
changeNumber(number);
console.log("3.", number);

// Эксперимент 4. Изменение объекта
const user = { name: "Антон" };
function changeUserName(obj) {
  obj.name = "Иван";
}
changeUserName(user);
console.log("4.", user);

// Эксперимент 5. Копирование массива
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("5. Исходный массив:", original);
console.log("5. Копия:", copy);

// Эксперимент 6. Метод map
const numbers = [1, 2, 3];
const doubled = numbers.map((value) => value * 2);
console.log("6. Исходный массив:", numbers);
console.log("6. Результат map:", doubled);