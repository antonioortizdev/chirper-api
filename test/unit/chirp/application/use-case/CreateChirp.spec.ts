import { Test, TestingModule } from '@nestjs/testing';
import { ChirpAlreadyExistsError } from '../../../../../src/chirp/domain/error/ChirpAlreadyExistsError';
import { ChirpEntity } from "../../../../../src/chirp/domain/entity/ChirpEntity"
import { ChirpId } from "../../../../../src/chirp/domain/value-object/ChirpId"
import { ChirpMessage } from "../../../../../src/chirp/domain/value-object/ChirpMessage"
import { CreateChirp } from "../../../../../src/chirp/application/use-case/CreateChirp"
import { Repository } from '../../../../../src/shared/domain/repository/interface/Repository';

describe('CreateChirp', () => {
  let createChirpUseCase: CreateChirp
  let chirp: ChirpEntity
  let repositoryMock: Repository<ChirpEntity>

  const getUseCaseInstance = async (): Promise<CreateChirp> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateChirp, {
        provide: Repository,
        useValue: repositoryMock
      }],
    }).compile()
    return module.get<CreateChirp>(CreateChirp)
  }

  beforeEach(() => {
    chirp = new ChirpEntity(
      new ChirpId('69ead714-65df-419d-b5b5-679bc81bef48'),
      new ChirpMessage('a')
    )
  })

  it('should create a new chirp', async () => {
    repositoryMock = {
      find: jest.fn().mockReturnValue([]),
      save: jest.fn().mockReturnValue(chirp)
    }
    createChirpUseCase = await getUseCaseInstance()

    await expect(createChirpUseCase.run(chirp)).resolves.toBe(chirp)
    expect(repositoryMock.find).toBeCalledWith({ id: chirp.id.value })
    expect(repositoryMock.save).toBeCalledWith(chirp)
  })
  
  it('should throw a chirp already exists error', async () => {
    repositoryMock = {
      find: jest.fn().mockReturnValue([chirp]),
      save: jest.fn()
    }
    createChirpUseCase = await getUseCaseInstance()

    await expect(() => createChirpUseCase.run(chirp)).rejects.toThrow(ChirpAlreadyExistsError)
    expect(repositoryMock.find).toBeCalledWith({ id: chirp.id.value })
    expect(repositoryMock.save).not.toBeCalled()

  })
})