import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common'
import { ChirpDto } from '../dto/ChirpDto'
import { CreateChirp } from '../../application/use-case/CreateChirp'
import { FindAllChirps } from '../../application/use-case/FindAllChirps'
import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError'

@Controller('chirp')
export class ChirpController {
  constructor(
    private findAllChirpsUseCase: FindAllChirps,
    private createChirpUseCase: CreateChirp,
  ) {}
  
  @Get()
  async findAll() {
    return this.findAllChirpsUseCase.run()
  }

  @Post()
  async create(@Body() chirpDto: ChirpDto) {
    try {
      return this.createChirpUseCase.run(chirpDto)
    } catch (error) {
      if (error instanceof InvalidArgumentError) throw new BadRequestException()
    }
  }
}
