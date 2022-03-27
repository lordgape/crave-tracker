import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateTaskDto } from 'src/task/dtos/create-Task.dto';
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
