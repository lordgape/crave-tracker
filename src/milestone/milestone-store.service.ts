import { Injectable } from '@nestjs/common';
import { Milestone } from './entities/milestone.entity';

@Injectable()
export default class MilestoneStore {
  private static milestoneStore: Milestone[] = [];

  static async getStore(): Promise<Milestone[]> {
    return this.milestoneStore;
  }

  static async addItem(milestone: Milestone) {
    this.milestoneStore.push(milestone);
  }

  static async getItem(milestone: Milestone): Promise<Milestone> {
    return this.milestoneStore.find(
      (milestone) => milestone.id == milestone.id,
    );
  }

  static async previousMilestone(milestoneId: string): Promise<Milestone | null> {
    const milestone = this.milestoneStore.find(
      (milestone) => milestone.id == milestoneId,
    );

    const index = this.milestoneStore.indexOf(milestone);

    return index > 0 ? this.milestoneStore[index - 1] : null;
  }
}
