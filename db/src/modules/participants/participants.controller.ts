import { ParticipantsService } from './participants.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Participant } from './participant.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Get()
  findAll(): Promise<Participant[]> {
    return this.participantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Participant> {
    return this.participantsService.findOne(id);
  }

  @Post()
  create(@Body() participant: Participant): Promise<Participant> {
    return this.participantsService.create(participant);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() participant: Participant,
  ): Promise<UpdateResult> {
    return this.participantsService.update(id, participant);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.participantsService.delete(id);
  }
}
