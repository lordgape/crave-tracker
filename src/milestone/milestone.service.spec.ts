import { Test, TestingModule } from '@nestjs/testing';
import { MilestoneService } from './milestone.service';

// TODO: Increase test coverage 

describe('MilestoneService', () => {
  let service: MilestoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilestoneService],
    }).compile();

    service = module.get<MilestoneService>(MilestoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMilestones', () => {
    it('Can get all milestones', async () => {
      const result = await service.getMilestones();
      expect(result).toEqual([]);
    });

  });

});
