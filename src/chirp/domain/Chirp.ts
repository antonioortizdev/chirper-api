import { ChirpId } from "./value-object/ChirpId";
import { ChirpMessage } from "./value-object/ChirpMessage";
import { Entity } from "../../shared/domain/entity/interface/Entity";
import { UserId } from "../../user/domain/value-object/UserId";

export interface ChirpData {
  id: string,
  author: string,
  message: string,
}

export class Chirp implements Entity {
  constructor(
    public id: ChirpId,
    public author: UserId,
    public message: ChirpMessage,
  ) {}

  toPrimitives(): ChirpData {
    return {
      id: String(this.id),
      author: String(this.author),
      message: String(this.message)
    }
  }

  static fromPrimitives({ id, author, message }: ChirpData): Chirp {
    return new Chirp(
      new ChirpId(id),
      new UserId(author),
      new ChirpMessage(message),
    )
  }
}