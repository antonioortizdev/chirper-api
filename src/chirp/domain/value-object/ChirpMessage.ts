import { MaxChirpMessageLengthPassedError } from "../error/MaxChirpMessageLengthPassedError";
import { StringValueObject } from "../../../shared/domain/value-object/StringValueObject";

export const MAX_CHIRP_MESSAGE_LIMIT = 280

export class ChirpMessage extends StringValueObject {
  constructor(value: string) {
    if (value.length > MAX_CHIRP_MESSAGE_LIMIT)
      throw new MaxChirpMessageLengthPassedError(value.length)

    super(value)
  }
}