import { ChirpEntity } from '../../../domain/entity/interface/ChirpEntity'
import { Injectable } from '@nestjs/common'
import { Repository } from '../../../../shared/domain/repository/interface/Repository'
import { readFileSync, writeFileSync } from 'fs'
import { ChirpDto } from '../../dto/ChirpDto'

@Injectable()
export class JsonRepository implements Repository<ChirpEntity> {
  private readonly databaseFilePath: string = 'src/chirp/infrastructure/json/file/db.json'
  private database

  constructor() {
    this.database = JSON.parse(readFileSync(this.databaseFilePath, 'utf-8'))
  }

  async find(): Promise<ChirpEntity[]> {
    return this.database.chirps.map(({ id, message }) => new ChirpDto(id, message))
  }
  async save(chirp: ChirpEntity): Promise<ChirpEntity> {
    const { id, message } = chirp

    this.database.chirps.push({ id, message })
    writeFileSync(this.databaseFilePath, JSON.stringify(this.database))

    console.log('this.database.chirps', this.database.chirps)
    
    return chirp
  }

}
