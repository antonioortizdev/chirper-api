import { Entity } from "../../entity/interface/Entity";

export interface Repository<T extends Entity> {
  find(filters?): Promise<T[]>
  save(entity: T): Promise<T>
}

export const Repository = Symbol('Repository')