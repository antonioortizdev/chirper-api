import { Entity } from "../../../../shared/domain/entity/interface/Entity";

export interface ChirpEntity extends Entity {
  readonly message: string,
}