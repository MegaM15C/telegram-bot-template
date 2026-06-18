import { Injectable } from "@nestjs/common";
import { Composer } from "grammy";
import { BotContext } from "src/common/types/bot-context.type";
import { StartHandler } from "./handlers/start.handler";

@Injectable()
export class StartComposer {
  public readonly composer = new Composer<BotContext>();

  constructor(private readonly handler: StartHandler) {
    this.register();
  }

  private register() {
    this.composer.command("start", this.handler.start.bind(this.handler));

    this.composer.callbackQuery("start:info", async (ctx) => {
      await this.handler.info(ctx);
    });

    this.composer.callbackQuery("start:alert", async (ctx) => {
      await this.handler.CbQueryAlert(ctx);
    });
  }
}
