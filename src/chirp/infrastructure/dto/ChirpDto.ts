import { ChirpEntity } from "../../domain/entity/interface/ChirpEntity";
import { Uuid } from "../../../shared/domain/value-object/Uuid";

export class ChirpDto implements ChirpEntity {
  constructor(
    readonly id: Uuid, 
    readonly message: string,
  ) {}
}