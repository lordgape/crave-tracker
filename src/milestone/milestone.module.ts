import { Module } from '@nestjs/common';
import { MilestoneResolver } from './resolvers/query/milestone.resolver';

@Module({
    providers:[MilestoneResolver]
})
export class MilestoneModule {}
