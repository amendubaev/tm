import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardColDto } from './dto/create-board-col.dto';
import { UpdateBoardColDto } from './dto/update-board-col.dto';

@Injectable()
export class BoardColService {
  constructor(private prisma: PrismaService) {}

  async create(createBoardColDto: CreateBoardColDto) {
    return await this.prisma.boardCol.create({
      data: createBoardColDto,
    });
  }

  findAll() {
    return this.prisma.boardCol.findMany();
  }

  findByProject(projectId: number) {
    return this.prisma.boardCol.findMany({ where: { projectId } });
  }

  findOne(id: number) {
    return this.prisma.boardCol.findUnique({ where: { id } });
  }

  update(id: number, updateBoardColDto: UpdateBoardColDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateBoardColDto,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
