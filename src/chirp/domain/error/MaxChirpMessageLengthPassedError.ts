import { InvalidArgumentError } from "../../../shared/domain/error/InvalidArgumentError";
import { MAX_CHIRP_MESSAGE_LIMIT } from "../value-object/ChirpMessage";

export class MaxChirpMessageLengthPassedError extends InvalidArgumentError {
  constructor(textLength: number) {
    super(`The chirp with length of ${textLength} characters exceeds the limit of ${MAX_CHIRP_MESSAGE_LIMIT} characters.`)
  }
}