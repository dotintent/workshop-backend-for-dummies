import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Participant } from './participant.entity';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(Participant)
    private participantsRepository: Repository<Participant>,
  ) {}

  async findAll(): Promise<Participant[]> {
    return await this.participantsRepository.find();
  }

  async findOne(id: number): Promise<Participant> {
    return await this.participantsRepository.findOneBy({ id });
  }

  async create(participant: Participant): Promise<Participant> {
    return await this.participantsRepository.save(participant);
  }

  async update(id: string, participant: Participant): Promise<UpdateResult> {
    return await this.participantsRepository.update(id, participant);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.participantsRepository.delete(id);
  }
}
