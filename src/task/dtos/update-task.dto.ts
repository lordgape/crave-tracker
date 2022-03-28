import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateTaskDto {
  @Field()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  milestoneId?: string;

  @IsOptional()
  @IsNotEmpty()
  @Field(() => Boolean, { nullable: true })
  isCompleted: boolean;
}
