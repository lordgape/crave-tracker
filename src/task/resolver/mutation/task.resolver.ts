import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateTaskDto } from 'src/task/dtos/create-Task.dto';
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

  
}
