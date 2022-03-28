import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-Task.dto';
import { Task } from './entities/task.entity';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dtos/update-task.dto';
import MilestoneStore from 'src/milestone/milestone-store.service';

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
  async getTaskById(id: string): Promise<Task> {
    return this.taskStore.find((task) => task.id == id);
  }

  async getManyTasks(milestoneId: string): Promise<Task[]> {
    return this.taskStore.filter((task) => task.milestoneId == milestoneId);
  }

  async markAsCompleted(updateTaskInput: UpdateTaskDto): Promise<Task> {
    const { isCompleted, id } = updateTaskInput;

    const task = await this.getTaskById(id);

    const previousMilestone = await MilestoneStore.previousMilestone(
      task.milestoneId,
    );

    if (previousMilestone) {
            
      const previousTasks = await this.getManyTasks(previousMilestone.id);

      const taskAreNotCompleted = previousTasks.some(
        (task) => task.isCompleted == false,
      );

      if (taskAreNotCompleted) {
        throw new BadRequestException('Previous Milestone must be completed');
      }
    }

    task.isCompleted = isCompleted;

    return task;
  }
}
