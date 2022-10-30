import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { PrismaClient } from 'prisma/prisma-client/scripts/default-index';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    // PrismaClient.forRoot()
    TaskModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
