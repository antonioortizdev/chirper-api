import { Inject, Injectable } from '@nestjs/common';
import { ChirpEntity } from '../../domain/entity/interface/ChirpEntity';
import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError';
import { Repository } from "../../../shared/domain/repository/interface/Repository";

@Injectable()
export class SaveChirp {
  constructor(
    @Inject(Repository) private repository: Repository<ChirpEntity>
  ) {}

  async run(chirp: ChirpEntity): Promise<ChirpEntity> {
    if (!chirp.id) {
      throw new InvalidArgumentError('Chirp id is missing!')
    }
    if (!chirp.message) {
      throw new InvalidArgumentError('Chirp message is missing!')
    }
    return this.repository.save(chirp)
  }
}
