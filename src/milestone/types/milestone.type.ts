import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Milestone')
export class MilestoneType {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}
