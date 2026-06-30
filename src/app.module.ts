import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './database.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get<TypeOrmModuleOptions>('database');
        if (!dbConfig) {
          throw new Error('Database configuration is not available');
        }
        return dbConfig;
      },
    }),
    TasksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { TasksModule } from './tasks/tasks.module';
// import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => {
//         const settings: TypeOrmModuleOptions = {
//           type: 'mysql',
//           host: configService.get<string>('DB_HOST'),
//           port: parseInt(configService.get<string>('DB_PORT') || '3306', 10),
//           username: configService.get<string>('DB_USERNAME'),
//           password: configService.get<string>('DB_PASSWORD'),
//           database: configService.get<string>('DB_NAME'),
//           autoLoadEntities: true,
//           synchronize: configService.get<string>('NODE_ENV') !== 'production',
//         };
//         return settings;
//       },
//     }),
//     TasksModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}
