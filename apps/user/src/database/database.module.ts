import { Global, Module } from '@nestjs/common';
import { createPool } from 'slonik';
import { postgresConnectionUri } from '@user/configs/database.config';
import { DB_POOL } from './database.di-tokens';

const providers = [
  {
    provide: DB_POOL,
    useFactory: () => createPool(postgresConnectionUri),
  },
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class DatabaseModule {}
