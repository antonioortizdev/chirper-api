import { ChirpController } from '../controller/ChirpController';
import { FindAllChirps } from '../../application/use-case/FindAllChirps';
import { JsonRepository } from '../json/repository/JsonRepository';
import { Module } from '@nestjs/common'
import { Repository } from '../../../shared/domain/repository/interface/Repository';
import { SaveChirp } from '../../application/use-case/SaveChirp';

const useCases = [FindAllChirps, SaveChirp]
const repositories = [
  {
    provide: Repository,
    useClass: JsonRepository,
  },
]

@Module({
  controllers: [ChirpController],
  providers: [...useCases, ...repositories]
})
export class ChirpModule {}
