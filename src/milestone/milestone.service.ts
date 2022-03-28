import { Injectable } from '@nestjs/common';
import { CreateMileStoneDto } from './dtos/create-milestone.dto';
import { Milestone } from './entities/milestone.entity';
import { v4 as uuid } from 'uuid';
import MilestoneStore  from './milestone-store.service';

@Injectable()
export class MilestoneService {
  

  async createMilestone(
    createMilestoneDto: CreateMileStoneDto,
  ): Promise<Milestone> {
    const { title } = createMilestoneDto;

    const milestone = {
      id: uuid(),
      title,
    };

    MilestoneStore.addItem(milestone);

    return milestone;
  }

  async getMilestones(): Promise<Milestone[]> {
    return MilestoneStore.getStore();
  }
}
