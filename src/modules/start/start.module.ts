import { Module } from "@nestjs/common";
import { StartHandler } from "./handlers/start.handler";
import { StartService } from "./services/start.service";
import { StartComposer } from "./start.composer";

@Module({
  imports: [],
  providers: [StartComposer, StartHandler, StartService],
  exports: [StartComposer],
})
export class StartModule {}
