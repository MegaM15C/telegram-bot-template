import { Injectable } from "@nestjs/common";
import { BotContext } from "src/common/types/bot-context.type";
import { StartService } from "../services/start.service";

@Injectable()
export class StartHandler {
  constructor(private readonly service: StartService) {}

  async start(ctx: BotContext) {
    const text = this.service.getStartText(ctx.from?.first_name);

    await ctx.reply(text, {
      reply_markup: this.service.getStartKeyboard(),
    });
  }

  async info(ctx: BotContext) {
    await ctx.answerCallbackQuery();
    await ctx.reply("Info about bot");
  }

  async CbQueryAlert(ctx: BotContext) {
    await ctx.answerCallbackQuery({
      text: "This is Alert CbQuery",
      show_alert: true,
    });
  }
}
