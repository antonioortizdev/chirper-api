import { Inject, Injectable } from '@nestjs/common';
import { Chirp } from '../../domain/Chirp';
import { ChirpAlreadyExistsError } from '../../domain/error/ChirpAlreadyExistsError';
import { Repository } from "../../../shared/domain/repository/interface/Repository";

@Injectable()
export class CreateChirp {
  constructor(
    @Inject(Repository) private repository: Repository<Chirp>
  ) {}

  async run(chirp: Chirp): Promise<Chirp> {
    await this.ensureChirpDoesNotExist(chirp)

    return this.repository.save(chirp)
  }

  private async ensureChirpDoesNotExist(chirp: Chirp) {
    const foundChirps = await this.repository.find({ id: chirp.id.value })
    if(foundChirps.length) {
      throw new ChirpAlreadyExistsError(chirp)
    }
  }
}
