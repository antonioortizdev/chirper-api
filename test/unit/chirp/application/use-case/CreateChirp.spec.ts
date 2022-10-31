import { Test, TestingModule } from '@nestjs/testing';
import { Chirp } from "../../../../../src/chirp/domain/Chirp"
import { ChirpAlreadyExistsError } from '../../../../../src/chirp/domain/error/ChirpAlreadyExistsError';
import { ChirpId } from "../../../../../src/chirp/domain/value-object/ChirpId"
import { ChirpMessage } from "../../../../../src/chirp/domain/value-object/ChirpMessage"
import { CreateChirp } from "../../../../../src/chirp/application/use-case/CreateChirp"
import { Repository } from '../../../../../src/shared/domain/repository/interface/Repository';
import { UserId } from '../../../../../src/user/domain/value-object/UserId';

describe('CreateChirp', () => {
  let createChirpUseCase: CreateChirp
  let chirp: Chirp
  let repositoryMock: Repository<Chirp>

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
    chirp = new Chirp(
      new ChirpId('69ead714-65df-419d-b5b5-679bc81bef48'),
      new UserId('4ca63255-b896-44ec-baae-7f644a835211'),
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