import { Task } from 'src/tasks/task.entity';

export interface UserResponse {
  username: string;
  id: string;
  tasks: Task[];
}
