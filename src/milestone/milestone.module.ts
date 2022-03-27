import { Module } from '@nestjs/common';
import { MilestoneQueryResolver } from './resolvers/query/milestone.resolver';
import { MilestoneService } from './milestone.service';

@Module({
    providers:[MilestoneQueryResolver, MilestoneService]
})
export class MilestoneModule {}
