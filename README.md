# CodeBuddy Issue-to-PR Demo

A minimal task manager used to demonstrate the CodeBuddy Issue-to-PR workflow.

## Requirements

- Node.js 20 or later
- No external dependencies

## Usage

```js
import { TaskManager } from './src/task-manager.js';

const tasks = new TaskManager();
const task = tasks.addTask('Prepare demo');
tasks.completeTask(task.id);
console.log(tasks.listTasks());
```

## Test

```bash
npm test
```
