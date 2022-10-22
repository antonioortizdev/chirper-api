import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common'
import { ChirpDto } from '../dto/ChirpDto'
import { ChirpEntity } from '../../domain/entity/ChirpEntity'
import { ChirpId } from '../../domain/value-object/ChirpId'
import { ChirpMessage } from '../../domain/value-object/ChirpMessage'
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
      const { id, message } = chirpDto
      const savedChirp = await this.createChirpUseCase.run(new ChirpEntity(
        new ChirpId(id),
        new ChirpMessage(message),
      ))
      return savedChirp.toPrimitives()
    } catch (error) {
      console.log(error)
      if (error instanceof InvalidArgumentError) throw new BadRequestException(error.message)
      throw new InternalServerErrorException(error.message)
    }
  }
}
