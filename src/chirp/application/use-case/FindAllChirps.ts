import { Inject, Injectable } from '@nestjs/common'
import { ChirpEntity } from '../../domain/entity/interface/ChirpEntity';
import { Repository } from "../../../shared/domain/repository/interface/Repository";

@Injectable()
export class FindAllChirps {
  constructor(
    @Inject(Repository) private repository: Repository<ChirpEntity>
  ) {}

  async run(): Promise<ChirpEntity[]> {
    return this.repository.find()
  }
}
