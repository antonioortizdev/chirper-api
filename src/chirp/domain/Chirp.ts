import { AggregateRoot } from 'src/shared/domain/AggregateRoot'
import { ChirpId } from './value-object/ChirpId'
import { ChirpMessage } from './value-object/ChirpMessage'

export class Chirp extends AggregateRoot {
  constructor(private id: ChirpId, private message: ChirpMessage) {
    super()
  }

  toPrimitives() {
    return {
      id: this.id.toString(),
      message: this.message.toString(),
    }
  }
}
