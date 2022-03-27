import { Injectable } from '@nestjs/common';
import { CreateMileStoneDto } from './dtos/create-milestone.dto';
import { Milestone } from './entities/milestone.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MilestoneService {
  
  private milestoneStore: Milestone[] = [];

  async createMilestone(
    createMilestoneDto: CreateMileStoneDto,
  ): Promise<Milestone> {
    const { title } = createMilestoneDto;

    const milestone = {
      id: uuid(),
      title,
    };

    this.milestoneStore.push(milestone);

    return milestone;
  }

  async getMilestones() : Promise<Milestone[]> {
    return this.milestoneStore;
   }
}
