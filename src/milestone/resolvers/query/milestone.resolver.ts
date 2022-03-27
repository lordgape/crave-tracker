import { Query, Resolver } from '@nestjs/graphql';
import { MilestoneService } from 'src/milestone/milestone.service';
import { MilestoneType } from '../../types/milestone.type';

@Resolver((of) => MilestoneType)
export class MilestoneQueryResolver {
  constructor(private milestoneService: MilestoneService) {}
  @Query((returns) => [MilestoneType])
  milestones() {
    return this.milestoneService.getMilestones();
  }
}
