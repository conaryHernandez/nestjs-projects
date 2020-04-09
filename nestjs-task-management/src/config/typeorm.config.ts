import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { keys } from './dev';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: keys.pg_username,
  password: keys.pg_password,
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // false in prod
};
