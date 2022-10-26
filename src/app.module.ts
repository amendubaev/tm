import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {TaskModule} from "./task/task.module";
import { PrismaClient } from "prisma/prisma-client/scripts/default-index";

@Module({
    imports: [
      PrismaClient.forRoot()
      TaskModule
    ]
})
export class AppModule {}