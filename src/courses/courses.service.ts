import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    // visibilidade nome: tipo
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do framework NesJS",
            description: "Fundamentos do framework NesJS",
            tags: ["node.js", "nest.js", "Javascript"],
        },
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        // No atributo 'courses', percorra com uma variável até onde o id recebido
        // como argumento é igual a o que ele possui e o retorne 
        const course =  this.courses.find((course: Course) => course.id === Number(id));

        if (!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return course;
    }

    // Dto => Data Transfer object : Interface ou classe | Geralmente usado quando se vai receber dados para criação e atualização
    create(createCourseDto: any){
        this.courses.push(createCourseDto); // Inserindo novo dado 
    }

    update(id: string, updateCourdeDto: any){

        // Index do id que se deve alterar
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id),
        );

        // Atualizando posição com informações
        this.courses[indexCourse] = updateCourdeDto;
    }

    remove(id: string) {

        // Index do id que se deve alterar
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id),
        );

        // Se o índice for maior que 0, exclua o objeeto da posição 1 vez
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }
    }
}
