import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-Task.dto';
import { Task } from './entities/task.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private taskStore: Task[] = [];

  async createTask(taskInput: CreateTaskDto): Promise<Task> {
    const { title } = taskInput;

    const task = {
      id: uuid(),
      title,
      isCompleted: false,
    };

    this.taskStore.push(task);

    return task;
  }

  async getTasks(): Promise<Task[]> {
    return this.taskStore;
  }
}
