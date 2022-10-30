import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { PrismaModule } from "../prisma/prisma.module";

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(dto: Prisma.Task) {
    const task = await this.prisma.task.create({});
    return task;
  }

  getAll() {
    return this.prisma.task.findMany();
  }

  getOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  // async getAllByProject(id: number) {
  //   return this.prisma.task.findUnique({
  //     where: { id },
  //   });
  // }
  //
  // async getAllByCategory() {}
}
