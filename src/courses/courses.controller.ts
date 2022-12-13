import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';

@Controller('courses')
export class CoursesController {

    // exibindo a partir da rota /courses
    @Get()
    findAll(){
        return 'Listagem de cursos';
    }

    // Pegando coisas do id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso #${id}`;
    }

    // Pegando coisas específicas do body
    @Post()
    create(@Body('name') body) {
        return body;
    }
}
