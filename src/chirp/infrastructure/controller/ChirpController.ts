import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common'
import { ChirpDto } from '../dto/ChirpDto'
import { FindAllChirps } from '../../application/use-case/FindAllChirps'
import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError'
import { SaveChirp } from '../../application/use-case/SaveChirp'
import { Uuid } from '../../../shared/domain/value-object/Uuid'

@Controller('chirp')
export class ChirpController {
  constructor(
    private findAllChirpsUseCase: FindAllChirps,
    private saveChirpUseCase: SaveChirp,
  ) {}
  
  @Get()
  async findAll() {
    return this.findAllChirpsUseCase.run()
  }

  @Post()
  async save(@Body() chirpDto: ChirpDto) {
    try {
      return this.saveChirpUseCase.run(chirpDto)
    } catch (error) {
      console.error(error)
      if (error instanceof InvalidArgumentError) throw new BadRequestException()
    }
  }
}
