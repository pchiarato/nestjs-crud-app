import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { UserConstant } from './user.constant';
import { getDataSourceToken } from '@nestjs/typeorm';

export const UserProviders = [
  {
    provide: UserConstant.USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [getDataSourceToken()],
  },
];
