import { Chirp } from '../Chirp'

export interface ChirpRepository {
  find(): Chirp[]
  save(chirp: Chirp)
}
