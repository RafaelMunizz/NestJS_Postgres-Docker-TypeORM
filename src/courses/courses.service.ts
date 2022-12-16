import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ){

    }

    findAll() {
        return this.courseRepository.find();
    }

    findOne(id: string) {
    
        const course =  this.courseRepository.findOne({where:{"id": +id}});

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }

        return course;
    }

    // Dto => Data Transfer object : Interface ou classe | Geralmente usado quando se vai receber dados para criação e atualização
    create(createCourseDto: CreateCourseDto){
        const course = this.courseRepository.create(createCourseDto); // Criando novo objeto a ser inserido
        return this.courseRepository.save(course); // Inserindo novo dado
    }

    async update(id: string, updateCourdeDto: UpdateCourseDto){

        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourdeDto,
        });

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }

        return this.courseRepository.save(course);
    }

    async remove(id: string) {

        const course =  await this.courseRepository.findOne({where:{"id": +id}});

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }

        return this.courseRepository.save(course);
    }
}
