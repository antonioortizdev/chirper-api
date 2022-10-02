import { Controller, Get, Inject } from '@nestjs/common'
import { FindAllChirps } from 'src/chirp/application/use-case/FindAllChirps'
@Controller('chirp')
export default class ChirpController {
  @Get()
  public findAll(
    @Inject()
    findAllChirpsUseCase: FindAllChirps,
  ) {
    return findAllChirpsUseCase.run()
  }
}
