import { Prisma, Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.TaskCreateInput): Promise<Task>;
    getAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<Task[]>;
    getOne(taskWhereUniqueInput: Prisma.TaskWhereUniqueInput): Promise<Task | null>;
}
