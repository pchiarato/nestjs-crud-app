import { DataSource } from 'typeorm';
import { Task } from './task.entity';
import { TaskConstant } from './task.constant';
import { getDataSourceToken } from '@nestjs/typeorm';

export const taskProviders = [
  {
    provide: TaskConstant.TASK_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: [getDataSourceToken()],
  },
];
