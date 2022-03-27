import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TaskType } from 'src/task/types/task.type';

@ObjectType('Milestone')
export class MilestoneType {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [TaskType])
  tasks?: TaskType[];
}
