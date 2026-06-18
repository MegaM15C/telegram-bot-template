import { Module } from "@nestjs/common";
import { StartModule } from "src/modules/start/start.module";
import { botProvider } from "./bot.provider";
import { BotService } from "./bot.service";

@Module({
  imports: [StartModule],
  providers: [botProvider, BotService],
})
export class BotModule {}
