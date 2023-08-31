import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('projects')
@ApiTags('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateProjectDto })
  create(
    @Body() createProjectDto: CreateProjectDto,
    @UserId() authorId: number,
  ) {
    const data = { ...createProjectDto, authorId };
    return this.projectService.create(data);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get('/id/:id')
  findOne(@Param('id') id: number) {
    return this.projectService.findById(+id);
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.projectService.findBySlug(slug);
  }

  @Get(':slug/tasks')
  // @ApiOkResponse({ type: TaskEntity, isArray: true })
  async getProjectTasks(@Param('slug') slug: string) {
    return await this.projectService.getProjectTasks(slug);
  }

  @Get(':slug/boards')
  // @ApiOkResponse({ type: BoardColEntity, isArray: true })
  async getProjectBoard(@Param('slug') slug: string) {
    return await this.projectService.getProjectBoard(slug);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectService.remove(+id);
  }
}
