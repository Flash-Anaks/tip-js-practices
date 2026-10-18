"use strict";

// Вариант № 2
const totalTasks = 15;
const completedTasks = 0;
const dailyLimit = 4;

// Проверяем исходные данные
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

// Считаем оставшиеся задачи
let remainingTasks = totalTasks - completedTasks;
let day = 1;

console.log("План выполнения задач:");

while (remainingTasks > 0) {
  // В последний день может остаться меньше дневной нормы
  const tasksForToday = Math.min(dailyLimit, remainingTasks);

  console.log(
    `День ${day}: выполнить ${tasksForToday} задач`
  );

  remainingTasks -= tasksForToday;
  day++;
}

console.log("Всего потребуется дней:", day - 1);