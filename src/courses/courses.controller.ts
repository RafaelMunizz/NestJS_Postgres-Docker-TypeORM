import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Delete, HttpCode, Param, Patch, Post, Res } from '@nestjs/common/decorators';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

    // Singleton: Apenas uma instância 
    constructor(private readonly coursesService: CoursesService) {}

    // exibindo a partir da rota /courses
    @Get()
    findAll(){
        //return response.status(200).send('Listagem de cursos'); // Mostrando na tela e enviando a resposta 200 do http
        return this.coursesService.findAll();
    }

    // Pegando coisas do id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coursesService.findOne(id);
    }

    // Pegando coisas específicas do body, no caso o 'name'
    @Post()
    //@HttpCode(HttpStatus.NO_CONTENT) // Mandar resposta http da requisição (NO_CONTENT = Sem conteúdo)
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.update(id, updateCourseDto);
    }

    // Pegando coisas do id
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coursesService.remove(id);
    }
}
