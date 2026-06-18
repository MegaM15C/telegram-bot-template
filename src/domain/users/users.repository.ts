import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  findUser(telegramId: bigint) {
    return this.prisma.users.findUnique({
      where: { telegramId: telegramId },
    });
  }
}
