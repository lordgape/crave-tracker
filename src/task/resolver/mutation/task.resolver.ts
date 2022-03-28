import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateTaskDto } from 'src/task/dtos/create-Task.dto';
import { UpdateTaskDto } from 'src/task/dtos/update-task.dto';
import { Task } from 'src/task/entities/task.entity';
import { TaskService } from 'src/task/task.service';
import { TaskType } from 'src/task/types/task.type';

@Resolver((of) => TaskType)
export class TaskMutationResolver {
  constructor(private taskService: TaskService){}

  @Mutation((returns) => TaskType)
  createTask(@Args('taskInput') taskInput: CreateTaskDto) {
    return this.taskService.createTask(taskInput);
  }
  
  @Mutation((returns) => TaskType)
  markAsCompleted(@Args('updateTaskInput') updateTaskInput: UpdateTaskDto) {
    return this.taskService.markAsCompleted(updateTaskInput);
  }

  
}
