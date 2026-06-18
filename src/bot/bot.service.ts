import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Bot } from "grammy";
import { StartComposer } from "src/modules/start/start.composer";

@Injectable()
export class BotService implements OnModuleInit {
  constructor(
    @Inject(Bot) private readonly bot: Bot,
    private readonly startComposer: StartComposer,
  ) {}

  async onModuleInit() {
    this.bot.use(this.startComposer.composer);
    await this.bot.start();
  }
}
