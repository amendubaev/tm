import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectModule } from './project/project.module';
import { BoardColModule } from './board-col/board-col.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  providers: [AppService],
  imports: [
    PrismaModule,
    TaskModule,
    AuthModule,
    UsersModule,
    ProjectModule,
    BoardColModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
