import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateMileStoneDto } from 'src/milestone/dtos/create-milestone.dto';
import { Milestone } from 'src/milestone/entities/milestone.entity';
import { MilestoneService } from 'src/milestone/milestone.service';
import { TaskService } from 'src/task/task.service';
import { MilestoneType } from '../../types/milestone.type';

@Resolver((of) => MilestoneType)
export class MilestoneMutationResolver {
  constructor(private mileStoneService: MilestoneService, private taskService: TaskService) {}

  @Mutation((returns) => MilestoneType)
  createMilestone(@Args('milestoneInput') milestoneInput: CreateMileStoneDto) {
    return this.mileStoneService.createMilestone(milestoneInput);
  }

  @ResolveField()
  async tasks(@Parent() milestone: Milestone) {
    const tasks = await this.taskService.getManyTasks(milestone.id);
    return tasks;
  }
}
