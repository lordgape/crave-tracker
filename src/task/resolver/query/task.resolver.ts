import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from 'src/task/task.service';
import { TaskType } from 'src/task/types/task.type';

@Resolver((of) => TaskType)
export class TaskQueryResolver {
  constructor(private taskService: TaskService) {}
  @Query((returns) => [TaskType])
  tasks() {
    return this.taskService.getTasks();
  }
}
