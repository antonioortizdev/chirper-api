import { Inject, Injectable } from '@nestjs/common'
import { Chirp } from '../../domain/Chirp';
import { Repository } from "../../../shared/domain/repository/interface/Repository";

@Injectable()
export class FindAllChirps {
  constructor(
    @Inject(Repository) private repository: Repository<Chirp>
  ) {}

  async run(): Promise<Chirp[]> {
    return this.repository.find()
  }
}
