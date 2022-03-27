import { Module } from '@nestjs/common';
import { MilestoneQueryResolver } from './resolvers/query/milestone.resolver';
import { MilestoneService } from './milestone.service';
import { MilestoneMutationResolver } from './resolvers/mutation/milestone.resolver';

@Module({
    providers:[MilestoneQueryResolver,MilestoneMutationResolver, MilestoneService]
})
export class MilestoneModule {}
