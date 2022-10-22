import { ChirpEntity } from "../entity/ChirpEntity";
import { InvalidArgumentError } from "../../../shared/domain/error/InvalidArgumentError";

export class ChirpAlreadyExistsError extends InvalidArgumentError {
  constructor(chirpThatExists: ChirpEntity) {
    super(`Chirp with ID <${chirpThatExists.id}> does exist already.`)
  }
}