import { Injectable } from "@nestjs/common";
import { StartKeyboard } from "../keyboards/start.keyboard";
import { StartTemplate } from "../templates/start.text";

@Injectable()
export class StartService {
  getStartText(name?: string) {
    return StartTemplate.replace("{{name}}", name ?? "user");
  }

  getStartKeyboard() {
    return StartKeyboard;
  }
}
