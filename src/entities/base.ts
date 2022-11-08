import { v4 as uuid } from "uuid";

export abstract class BaseEntity {
  public readonly id?: string;

  constructor() {
    this.id = uuid();
  }
}
