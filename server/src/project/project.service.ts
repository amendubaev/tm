import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const boards = {
      create: [
        {
          name: 'Backlog',
          sort: 1,
        },
      ],
    };

    const data = { ...createProjectDto, boards };

    const isProjectExists = await this.prisma.project.findUnique({
      where: { slug: data.slug },
    });

    if (isProjectExists) {
      throw new BadRequestException('Project already exists');
    }

    return await this.prisma.project.create({
      data,
      include: {
        boards: true,
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany();
  }

  // findOne(id: number) {
  //   return this.prisma.project.findUnique({ where: { id } });
  // }

  findBySlug(slug: string) {
    return this.prisma.project.findUnique({
      where: { slug },
      include: {
        boards: true,
      },
    });
  }

  findById(id: number) {
    return this.prisma.project.findUnique({
      where: { id },
      include: {
        boards: true,
      },
    });
  }

  async getProjectBoard(slug: string) {
    const project = await this.prisma.project.findUnique({
      where: { slug },
    });

    return this.prisma.boardCol.findMany({
      where: {
        projectId: Number(project.id),
      },
      include: {
        tasks: true,
      },
    });
  }

  async getProjectTasks(slug: string) {
    const project = await this.prisma.project.findUnique({
      where: { slug },
    });

    return this.prisma.task.findMany({
      where: { projectId: Number(project.id) },
    });
  }

  async update(id: number, updateProjectDto: Prisma.ProjectWhereUniqueInput) {
    return await this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}
