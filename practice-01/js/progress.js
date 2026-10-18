"use strict";

// Вариант № 2
const totalTasks = 15;
const completedTasks = 0;
const dailyLimit = 4;

// Проверяем входные данные
if (
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  !Number.isInteger(dailyLimit) ||
  totalTasks < 0 ||
  completedTasks < 0 ||
  completedTasks > totalTasks ||
  dailyLimit <= 0
) {
  throw new Error("Некорректные входные данные");
}

// Рассчитываем сводку
const remainingTasks = totalTasks - completedTasks;

const progressPercent =
  totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

let status;

if (completedTasks === 0) {
  status = "Не начато";
} else if (completedTasks === totalTasks) {
  status = "Завершено";
} else {
  status = "В процессе";
}

// Выводим результат
console.log("Всего задач:", totalTasks);
console.log("Выполнено:", completedTasks);
console.log("Осталось:", remainingTasks);
console.log("Выполнение:", `${progressPercent}%`);
console.log("Статус:", status);