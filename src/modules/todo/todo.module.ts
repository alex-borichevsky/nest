import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ToDo} from "../entities/todo.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ToDo])],
    controllers: [],
    providers: []
})
export class TodoModule {}