import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      this.tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      this.tasks = tasks.filter(task => {
        return task.title.includes(search) || task.description.includes(search);
      });
    }

    return this.tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find(task => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteById(id: string): void {
    const found = this.getTaskById(id);

    this.tasks = this.tasks.filter(task => task.id !== found.id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);

    console.log(task);

    task.status = status;

    return task;
  }
}
