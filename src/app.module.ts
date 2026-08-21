import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [UsersModule, ProfilesModule], //conectar sub modulos
  controllers: [],
  providers: [],
})
export class AppModule {}
