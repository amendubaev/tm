import {Controller, Get} from "@nestjs/common";

@Controller('/tasks/')
export class TaskController {
    create() {

    }

    @Get()
    getAll() {
        return 'WORK'
    }

    getOne() {

    }

    getAllByProject() {

    }

    getAllByCategory() {

    }
}