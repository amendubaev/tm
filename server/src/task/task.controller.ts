import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { TaskEntity } from './entities/task.entity';

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiCreatedResponse({ type: TaskEntity })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TaskEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const task = await this.taskService.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }

    return task;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: TaskEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TaskEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id);
  }
}
