import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
    findOne(id: number): Promise<import(".prisma/client").Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
}
