import { Test } from '@nestjs/testing';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatus } from './enums/task-status';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
});

const mockUser = {
  username: 'Tester',
};

describe('Task Service', () => {
  let tasksService;
  let taskRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTaskRepository },
      ],
    }).compile();

    tasksService = await module.get<TasksService>(TasksService);
    taskRepository = await module.get<TaskRepository>(TaskRepository);
  });

  describe('GetTasks', () => {
    it('gets all tasks from the repository', async () => {
      taskRepository.getTasks.mockResolvedValue('somevalue');

      const filters: GetTaskFilterDto = {
        status: TaskStatus.IN_PROGRESS,
        search: 'Some search query',
      };

      expect(taskRepository.getTasks).not.toHaveBeenCalled();

      const result = await tasksService.getTasks(filters, mockUser);

      expect(taskRepository.getTasks).toHaveBeenCalled();
      expect(result).toEqual('somevalue');
    });
  });
});
