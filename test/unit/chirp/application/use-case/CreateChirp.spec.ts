import { Chirp } from "../../../../../src/chirp/domain/Chirp";
import { ChirpAlreadyExistsError } from "../../../../../src/chirp/domain/error/ChirpAlreadyExistsError";
import { CreateChirp } from "../../../../../src/chirp/application/use-case/CreateChirp";
import { Repository } from "../../../../../src/shared/domain/repository/interface/Repository";

describe('CreateChirp', () => {
  let createChirp: CreateChirp;
  let repository: Repository<Chirp>;

  beforeEach(() => {
    repository = {
      save: jest.fn(),
      find: jest.fn()
    } as any;
    createChirp = new CreateChirp(repository);
  });

  it('should throw an error when the chirp already exists', async () => {
    (repository.find as jest.Mock).mockResolvedValue([{ id: '1' }]);
    await expect(createChirp.run({ id: '1' })).rejects.toThrowError(ChirpAlreadyExistsError);
  });

  it('should save the chirp when it does not exist', async () => {
    (repository.find as jest.Mock).mockResolvedValue([]);
    const chirp = { id: '1' };
    await createChirp.run(chirp);
    expect(repository.save).toHaveBeenCalledWith(chirp);
  });
});
