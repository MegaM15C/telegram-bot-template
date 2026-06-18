import { ConfigService } from "@nestjs/config";
import { Bot } from "grammy";

export const BOT_TOKEN = "BOT_TOKEN";

export const botProvider = {
  provide: Bot,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const token = configService.getOrThrow<string>("telegram.token");
    return new Bot(token);
  },
};
