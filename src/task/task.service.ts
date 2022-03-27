import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-Task.dto';
import { Task } from './entities/task.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private taskStore: Task[] = [];

  async createTask(taskInput: CreateTaskDto): Promise<Task> {
    const { title, milestoneId } = taskInput;

    const task = {
      id: uuid(),
      title,
      isCompleted: false,
      milestoneId,
    };

    this.taskStore.push(task);

    return task;
  }

  async getTasks(): Promise<Task[]> {
    return this.taskStore;
  }

  async getManyTasks(milestoneId: string): Promise<Task[]> {
    return this.taskStore.filter((task) => task.milestoneId == milestoneId);
  }
}
