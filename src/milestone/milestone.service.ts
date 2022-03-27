import { Injectable } from '@nestjs/common';
import { CreateMileStoneDto } from './dtos/create-milestone.dto';
import { Milestone } from './entities/milestone.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MilestoneService {
  constructor(private store: Milestone[] = []) {}

  async createMilestone(createMilestoneDto: CreateMileStoneDto): Promise<Milestone> {
    const { title } = createMilestoneDto;

    const milestone = {
      id: uuid(),
      title,
    };

    this.store.push(milestone);

    return milestone;
  }
}
