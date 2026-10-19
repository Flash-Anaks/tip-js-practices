import { demoTasks, variantNumber, variantTasks } from "./data.js";
import {
  createTask,
  findTaskById,
  getPendingTasks,
  getTaskTitles,
  getTaskStats,
  addTask,
  setTaskCompleted,
  renameTask,
  removeTask,
} from "./task-service.js";

function showTasks(label, tasks) {
  console.log(`\n${label}`);
  console.table(tasks);
  const { total, completed, pending, progress } = getTaskStats(tasks);
  console.log(`Всего: ${total}; выполнено: ${completed}; осталось: ${pending}`);
  console.log(`Прогресс: ${progress.toFixed(1)}%`);
}

function applyOperation(currentTasks, result, label) {
  if (!result.ok) {
    console.log(`${label}: ошибка — ${result.error}`);
    return currentTasks;
  }

  console.log(`${label}: успешно`);
  return result.tasks;
}

console.log("========== ОБЩИЙ СЦЕНАРИЙ ==========");

let currentTasks = demoTasks;

showTasks("Исходные задачи", currentTasks);
console.log("Названия:", getTaskTitles(currentTasks));
console.log("Невыполненные:", getPendingTasks(currentTasks));
console.log("Поиск id=4:", findTaskById(currentTasks, 4));
console.log("Поиск id=777:", findTaskById(currentTasks, 777));

currentTasks = applyOperation(
  currentTasks,
  addTask(currentTasks, 20, "Добавить проверку", "high"),
  "Добавление задачи"
);

currentTasks = applyOperation(
  currentTasks,
  setTaskCompleted(currentTasks, 4, true),
  "Выполнение задачи id=4"
);

currentTasks = applyOperation(
  currentTasks,
  renameTask(currentTasks, 10, "Подготовить инструкцию запуска"),
  "Переименование задачи id=10"
);

currentTasks = applyOperation(
  currentTasks,
  removeTask(currentTasks, 7),
  "Удаление задачи id=7"
);

currentTasks = applyOperation(
  currentTasks,
  addTask(currentTasks, 20, "Повторная задача", "medium"),
  "Проверка дублирующего id"
);

showTasks("Итог общего сценария", currentTasks);
console.log("Исходный demoTasks не изменён:", demoTasks);

console.log("\n========== ИНДИВИДУАЛЬНЫЙ ВАРИАНТ ==========");
console.log("Вариант:", variantNumber);

let variantCurrentTasks = variantTasks;

showTasks("Исходные задачи варианта", variantCurrentTasks);

variantCurrentTasks = applyOperation(
  variantCurrentTasks,
  addTask(variantCurrentTasks, 80, "Подготовить вступление", "medium"),
  "Добавление задачи id=80"
);

variantCurrentTasks = applyOperation(
  variantCurrentTasks,
  setTaskCompleted(variantCurrentTasks, 11, true),
  "Выполнение задачи id=11"
);

variantCurrentTasks = applyOperation(
  variantCurrentTasks,
  renameTask(variantCurrentTasks, 23, "Подготовить окончательный план выступления"),
  "Переименование задачи id=23"
);

variantCurrentTasks = applyOperation(
  variantCurrentTasks,
  removeTask(variantCurrentTasks, 37),
  "Удаление задачи id=37"
);

variantCurrentTasks = applyOperation(
  variantCurrentTasks,
  addTask(variantCurrentTasks, 80, "Повторная задача", "medium"),
  "Проверка повторного id=80"
);

showTasks("Итог индивидуального варианта", variantCurrentTasks);
console.log("Исходный variantTasks не изменён:", variantTasks);

// Три дополнительных случая
console.log("\n========== СОБСТВЕННЫЕ ПРОВЕРКИ ==========");

const addedAfterRemoval = removeTask(demoTasks, 7);
const afterRemoval = addedAfterRemoval.ok
  ? addTask(addedAfterRemoval.tasks, 7, "Новая задача после удаления", "low")
  : addedAfterRemoval;
console.log("1. Добавление после удаления:", afterRemoval);

console.log(
  "2. Неверный статус:",
  setTaskCompleted(demoTasks, 4, "false")
);

console.log(
  "3. Пустое название:",
  createTask(99, "   ", "medium")
);
