import { User } from "@/entities/user";
import { BaseRepository } from "./base.repository";

export interface UserRepository extends BaseRepository<User> {
  findAll(): Promise<Array<Omit<User, "password">>>;
  findByEmail(email: string): Promise<User | null>;
}
