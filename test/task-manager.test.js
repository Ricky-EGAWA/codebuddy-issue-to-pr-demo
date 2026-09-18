import assert from 'node:assert/strict';
import test from 'node:test';

import { TaskManager } from '../src/task-manager.js';

test('adds a task with a generated id', () => {
  const manager = new TaskManager();

  assert.deepEqual(manager.addTask('Write tests'), {
    id: 1,
    title: 'Write tests',
    completed: false,
  });
});

test('trims task titles', () => {
  const manager = new TaskManager();

  assert.equal(manager.addTask('  Prepare demo  ').title, 'Prepare demo');
});

test('completes an existing task', () => {
  const manager = new TaskManager();
  const task = manager.addTask('Prepare demo');

  assert.equal(manager.completeTask(task.id).completed, true);
  assert.equal(manager.listTasks()[0].completed, true);
});

test('rejects invalid input and unknown task ids', () => {
  const manager = new TaskManager();

  assert.throws(() => manager.addTask('  '), TypeError);
  assert.throws(() => manager.completeTask(999), RangeError);
});
