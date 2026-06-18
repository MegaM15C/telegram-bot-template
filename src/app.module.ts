import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { BotModule } from "./bot/bot.module";
import { configuration } from "./config/config";
import { validationSchema } from "./config/validation";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: validationSchema,
    }),
    BotModule,
    PrismaModule,
  ],
})
export class AppModule {}
