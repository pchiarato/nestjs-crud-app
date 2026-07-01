import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

describe('TasksService', () => {
  let service: TasksService;
  let taskRepository: { findOne: jest.Mock };

  beforeEach(() => {
    taskRepository = {
      findOne: jest.fn(),
    };

    service = new TasksService(taskRepository as any);
  });

  it('loads a task by id for the current user using the user relation id', async () => {
    const user = { id: 'user-id' } as User;
    const task = { id: 'task-id', title: 'Test task' } as Task;
    taskRepository.findOne.mockResolvedValue(task);

    const result = await service.getTaskById('task-id', user);

    expect(taskRepository.findOne).toHaveBeenCalledWith({
      where: { id: 'task-id', user: { id: 'user-id' } },
    });
    expect(result).toBe(task);
  });
});
