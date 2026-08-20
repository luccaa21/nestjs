import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], //conectar sub modulos
  controllers: [],
  providers: [],
})
export class AppModule {}
