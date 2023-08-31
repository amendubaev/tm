import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { BoardColService } from './board-col.service';
import { CreateBoardColDto } from './dto/create-board-col.dto';
import { UpdateBoardColDto } from './dto/update-board-col.dto';
import { BoardColEntity } from './entities/board-col.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('board-col')
@ApiTags('board-col')
export class BoardColController {
  constructor(private readonly boardColService: BoardColService) {}

  @Post()
  @ApiCreatedResponse({ type: BoardColEntity })
  create(@Body() createBoardColDto: CreateBoardColDto) {
    return this.boardColService.create(createBoardColDto);
  }

  @Get()
  @ApiOkResponse({ type: BoardColEntity, isArray: true })
  findAll() {
    return this.boardColService.findAll();
  }

  @Get('/filter/')
  @ApiOkResponse({ type: BoardColEntity, isArray: true })
  async findByProject(@Query('projectId', ParseIntPipe) projectId: number) {
    return this.boardColService.findByProject(projectId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardColService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoardColDto: UpdateBoardColDto,
  ) {
    return this.boardColService.update(+id, updateBoardColDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardColService.remove(+id);
  }
}
