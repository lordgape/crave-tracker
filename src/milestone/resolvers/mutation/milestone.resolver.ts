import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMileStoneDto } from 'src/milestone/dtos/create-milestone.dto';
import { MilestoneService } from 'src/milestone/milestone.service';
import { MilestoneType } from '../../types/milestone.type';

@Resolver((of) => MilestoneType)
export class MilestoneMutationResolver {
  constructor(private mileStoneService: MilestoneService) {}
  @Mutation((returns) => MilestoneType)
  createMilestone(@Args('milestoneInput') milestoneInput: CreateMileStoneDto,) {
    return this.mileStoneService.createMilestone(milestoneInput);
  }
}
