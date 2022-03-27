import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Task')
export class TaskType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  isCompleted: boolean;
}
