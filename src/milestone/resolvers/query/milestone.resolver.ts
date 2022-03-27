
import { Query, Resolver } from '@nestjs/graphql';
import { MilestoneType } from '../../types/milestone.type';

@Resolver((of) => MilestoneType)
export class MilestoneQueryResolver {
  @Query((returns) => MilestoneType)
  milestones() {
    return {
      id: '12344s',
      title: 'My milestone',
    };
  }
}
