import { readFileSync, writeFileSync } from 'fs'
import { Chirp } from '../../../domain/Chirp'
import { Injectable } from '@nestjs/common'
import { Repository } from '../../../../shared/domain/repository/interface/Repository'

@Injectable()
export class JsonRepository implements Repository<Chirp> {
  private readonly databaseFilePath: string = 'src/chirp/infrastructure/json/file/db.json'
  private database

  constructor() {
    this.database = JSON.parse(readFileSync(this.databaseFilePath, 'utf-8'))
  }

  async find(filters?): Promise<Chirp[]> {
    const foundChirps = filters
      ? this.database.chirps.filter((chirp) => {
          const { id } = filters
          if (id) return chirp.id === id
          return false
        })
      : this.database.chirps 

    console.log('filters', filters)
    console.log('foundChirps', foundChirps)

    return foundChirps.map(({ id, message }) => new Chirp(id, message))
  }

  async save(chirp: Chirp): Promise<Chirp> {
    this.database.chirps.push(chirp.toPrimitives())
    writeFileSync(this.databaseFilePath, JSON.stringify(this.database))
    
    return chirp
  }

}
