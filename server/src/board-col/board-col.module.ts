import { Module } from '@nestjs/common';
import { BoardColService } from './board-col.service';
import { BoardColController } from './board-col.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [BoardColController],
  providers: [BoardColService],
  imports: [PrismaModule],
})
export class BoardColModule {}
