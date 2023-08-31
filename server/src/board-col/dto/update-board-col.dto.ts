import { PartialType } from '@nestjs/swagger';
import { CreateBoardColDto } from './create-board-col.dto';

export class UpdateBoardColDto extends PartialType(CreateBoardColDto) {}
