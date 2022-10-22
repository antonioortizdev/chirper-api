import { Inject, Injectable } from '@nestjs/common';
import { ChirpAlreadyExistsError } from '../../domain/error/ChirpAlreadyExistsError';
import { ChirpEntity } from '../../domain/entity/ChirpEntity';
import { Repository } from "../../../shared/domain/repository/interface/Repository";

@Injectable()
export class CreateChirp {
  constructor(
    @Inject(Repository) private repository: Repository<ChirpEntity>
  ) {}

  async run(chirp: ChirpEntity): Promise<ChirpEntity> {
    await this.ensureChirpDoesNotExist(chirp)

    return this.repository.save(chirp)
  }

  private async ensureChirpDoesNotExist(chirp: ChirpEntity) {
    const foundChirps = await this.repository.find({ id: chirp.id.value })
    if(foundChirps.length) {
      throw new ChirpAlreadyExistsError(chirp)
    }
  }
}
