import { Chirp } from 'src/chirp/domain/Chirp'
import { ChirpRepository } from '../../domain/repository/ChirpRepository'

export class SaveChirp {
  constructor(private repository: ChirpRepository) {}

  run(chirp: Chirp) {
    return this.repository.save(chirp)
  }
}
