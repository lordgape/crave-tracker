import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import MilestoneStore from 'src/milestone/milestone-store.service';

// TODO: Increase test coverage 

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTasks', () => {
    it('Can get all tasks', async () => {
      const result = await service.getTasks();
      expect(result).toEqual([]);
    });

  });

});
