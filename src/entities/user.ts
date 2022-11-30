import { BaseEntity } from "./base";

export class User extends BaseEntity {
  public name: string;
  public email: string;
  public password: string;
  public createdAt?: Date;

  constructor(props: User) {
    super();
    Object.assign(this, props);
  }
}
