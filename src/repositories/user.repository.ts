import { User } from "@/entities/user";

export interface UserRepository {
  findAll(): Promise<Array<Omit<User, "password">>>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
  update(id: string, user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
