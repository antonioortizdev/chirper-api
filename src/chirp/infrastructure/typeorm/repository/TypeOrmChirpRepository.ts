import { Chirp } from 'src/chirp/domain/Chirp'
import { ChirpRepository } from 'src/chirp/domain/repository/ChirpRepository'

export class TypeOrmChirpRepository implements ChirpRepository {
  find(): Chirp[] {
    throw new Error('Method not implemented.')
  }
  save(chirp: Chirp) {
    const arr = [
      1,
      2,
      'string',
      "string2",
    ]
    console.log('arr', arr)
    console.log('chirp', chirp)
  }
}
