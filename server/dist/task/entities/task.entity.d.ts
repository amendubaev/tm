import { Task } from '@prisma/client';
export declare class TaskEntity implements Task {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    priority: number;
    startDate: Date;
    endDate: Date;
    isRenewable: boolean;
    authorId: number;
}
