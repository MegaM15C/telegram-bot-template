import { Module } from "@nestjs/common";
import { UsersModule } from "src/domain/users/users.module";
import { StartHandler } from "./handlers/start.handler";
import { StartService } from "./services/start.service";
import { StartComposer } from "./start.composer";

@Module({
  imports: [UsersModule],
  providers: [StartComposer, StartHandler, StartService],
  exports: [StartComposer],
})
export class StartModule {}
