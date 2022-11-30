import { User } from "@/entities/user";
import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../user.repository";

export class UserImplementation implements UserRepository {
  constructor(private readonly _prisma: PrismaClient) {}

  async findAll(): Promise<Array<Omit<User, "password">>> {
    const users = await this._prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
    });

    return users;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this._prisma.user.findUnique({ where: { id } });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this._prisma.user.findUnique({ where: { email } });

    return user;
  }

  async save(user: User): Promise<void> {
    await this._prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async update(id: string, user: User): Promise<void> {
    await this._prisma.user.update({
      where: { id },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this._prisma.user.delete({ where: { id } });
  }
}
