export class TaskManager {
  #tasks = [];
  #nextId = 1;

  addTask(title) {
    if (typeof title !== 'string' || title.trim() === '') {
      throw new TypeError('Task title must be a non-empty string');
    }

    const task = {
      id: this.#nextId++,
      title: title.trim(),
      completed: false,
    };

    this.#tasks.push(task);
    return { ...task };
  }

  completeTask(id) {
    const task = this.#tasks.find((candidate) => candidate.id === id);

    if (!task) {
      throw new RangeError(`Task ${id} was not found`);
    }

    task.completed = true;
    return { ...task };
  }

  listTasks() {
    return this.#tasks.map((task) => ({ ...task }));
  }
}
