import { Chirp } from "../Chirp";
import { InvalidArgumentError } from "../../../shared/domain/error/InvalidArgumentError";

export class ChirpAlreadyExistsError extends InvalidArgumentError {
  constructor(chirpThatExists: Chirp) {
    super(`Chirp with ID <${chirpThatExists.id}> does exist already.`)
  }
}