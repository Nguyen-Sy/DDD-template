import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RequestContextModule } from 'nestjs-request-context';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ContextInterceptor } from '@core/application/context/ContextInterceptor';
import { ExceptionInterceptor } from '@core/application/interceptors/exception.interceptor';
import { UserModule } from '@user/modules/user/user.module';
import { DatabaseModule } from './database/database.module';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
];

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    RequestContextModule,
    CqrsModule,
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [...interceptors],
})
export class AppModule {}
