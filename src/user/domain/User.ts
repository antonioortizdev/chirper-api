import { Entity } from "../../shared/domain/entity/interface/Entity";
import { UserEmail } from "./value-object/UserEmail";
import { UserId } from "./value-object/UserId";

export class User implements Entity {
  constructor(
    readonly id: UserId,
    readonly email: UserEmail,
  ) {}

  toPrimitives(): object {
    return {
      id: String(this.id),
      email: String(this.email)
    }
  }
}