import { ChirpId } from "./value-object/ChirpId";
import { ChirpMessage } from "./value-object/ChirpMessage";
import { Entity } from "../../shared/domain/entity/interface/Entity";
import { UserId } from "../../user/domain/value-object/UserId";

export class Chirp implements Entity {
  constructor(
    readonly id: ChirpId,
    readonly author: UserId,
    readonly message: ChirpMessage,
  ) {}

  toPrimitives(): object {
    return {
      id: String(this.id),
      author: String(this.author),
      message: String(this.message)
    }
  }
}