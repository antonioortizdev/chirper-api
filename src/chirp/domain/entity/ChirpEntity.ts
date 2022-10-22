import { ChirpId } from "../value-object/ChirpId";
import { ChirpMessage } from "../value-object/ChirpMessage";
import { Entity } from "../../../shared/domain/entity/interface/Entity";

export class ChirpEntity implements Entity {
  constructor(
    readonly id: ChirpId,
    readonly message: ChirpMessage,
  ) {}
  toPrimitives(): object {
    return {
      id: this.id.value,
      message: this.message.value
    }
  }
}