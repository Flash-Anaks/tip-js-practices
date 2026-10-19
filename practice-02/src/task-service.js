const validPriorities = ["low", "medium", "high"];

function isValidId(id) {
  return Number.isSafeInteger(id) && id > 0;
}

function validateTitle(title) {
  if (typeof title !== "string") {
    return { ok: false, error: "Название должно быть строкой" };
  }

  const normalizedTitle = title.trim();

  if (normalizedTitle.length < 1 || normalizedTitle.length > 100) {
    return {
      ok: false,
      error: "Название должно содержать от 1 до 100 символов",
    };
  }

  return { ok: true, title: normalizedTitle };
}

export function createTask(id, title, priority = "medium") {
  if (!isValidId(id)) {
    return { ok: false, error: "Некорректный идентификатор" };
  }

  const titleResult = validateTitle(title);

  if (!titleResult.ok) {
    return titleResult;
  }

  if (!validPriorities.includes(priority)) {
    return { ok: false, error: "Некорректный приоритет" };
  }

  return {
    ok: true,
    task: {
      id,
      title: titleResult.title,
      completed: false,
      priority,
    },
  };
}

export function findTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

export function getPendingTasks(tasks) {
  return tasks.filter((task) => task.completed === false);
}

export function getTaskTitles(tasks) {
  return tasks.map((task) => task.title);
}

export function getTaskStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed === true).length;
  const pending = total - completed;
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return { total, completed, pending, progress };
}

export function addTask(tasks, id, title, priority = "medium") {
  if (!isValidId(id)) {
    return { ok: false, error: "Некорректный идентификатор" };
  }

  if (findTaskById(tasks, id) !== undefined) {
    return { ok: false, error: "Задача с таким id уже существует" };
  }

  const result = createTask(id, title, priority);

  if (!result.ok) {
    return result;
  }

  return { ok: true, tasks: [...tasks, result.task] };
}

export function setTaskCompleted(tasks, id, completed) {
  if (!isValidId(id)) {
    return { ok: false, error: "Некорректный идентификатор" };
  }

  if (typeof completed !== "boolean") {
    return { ok: false, error: "Статус должен быть true или false" };
  }

  if (findTaskById(tasks, id) === undefined) {
    return { ok: false, error: "Задача не найдена" };
  }

  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed } : task
  );

  return { ok: true, tasks: updatedTasks };
}

export function renameTask(tasks, id, title) {
  if (!isValidId(id)) {
    return { ok: false, error: "Некорректный идентификатор" };
  }

  if (findTaskById(tasks, id) === undefined) {
    return { ok: false, error: "Задача не найдена" };
  }

  const titleResult = validateTitle(title);

  if (!titleResult.ok) {
    return titleResult;
  }

  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, title: titleResult.title } : task
  );

  return { ok: true, tasks: updatedTasks };
}

export function removeTask(tasks, id) {
  if (!isValidId(id)) {
    return { ok: false, error: "Некорректный идентификатор" };
  }

  if (findTaskById(tasks, id) === undefined) {
    return { ok: false, error: "Задача не найдена" };
  }

  return {
    ok: true,
    tasks: tasks.filter((task) => task.id !== id),
  };
}
