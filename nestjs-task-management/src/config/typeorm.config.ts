import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { keys } from './dev';
// import * as config from 'config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.RDS_HOSTNAME || 'localhost',
  port: parseInt(process.env.RDS_PORT) || 5432,
  username: process.env.RDS_USERNAME || keys.pg_username,
  password: process.env.RDS_PASSWORD || keys.pg_password,
  database: process.env.RDS_DB_NAME || 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: Boolean(process.env.TYPEORM_SYNC) || true, // false in prod
};

/*

const dbConfig = config.get('db)

export const typeOrmConfig: process.env.RDS_ TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [__dirname ],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
*/
