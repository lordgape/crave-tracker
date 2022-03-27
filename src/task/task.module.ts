import { Module } from '@nestjs/common';
import { TaskMutationResolver } from './resolver/mutation/task.resolver';
import { TaskQueryResolver } from './resolver/query/task.resolver';
import { TaskService } from './task.service';

@Module({
  providers: [TaskQueryResolver, TaskMutationResolver, TaskService],
})
export class TaskModule {}
