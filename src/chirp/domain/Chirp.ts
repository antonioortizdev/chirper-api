import { ChirpId } from "./value-object/ChirpId";
import { ChirpMessage } from "./value-object/ChirpMessage";
import { Entity } from "../../shared/domain/entity/interface/Entity";

export class Chirp implements Entity {
  constructor(
    readonly id: ChirpId,
    readonly message: ChirpMessage,
  ) {}

  toPrimitives(): object {
    return {
      id: String(this.id),
      message: String(this.message)
    }
  }
}