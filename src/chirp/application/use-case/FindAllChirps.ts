import { Chirp } from 'src/chirp/domain/Chirp'
import { ChirpRepository } from '../../domain/repository/ChirpRepository'

export class FindAllChirps {
  constructor(private repository: ChirpRepository) {}

  run(): Chirp[] {
    return this.repository.find()
  }
}
