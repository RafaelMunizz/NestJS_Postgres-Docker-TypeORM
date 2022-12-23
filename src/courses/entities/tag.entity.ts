import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

import {v4 as uuidv4} from 'uuid'; // Biblioteca para gerar Id's

@Entity('tags')
export class Tag {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    // A relação é N:N e primeiro deve ser passar o alvo, no caso vai ser o lado inverso,
    // Tag se relaciona com Course nesse lado da aplicação, e passamos como pegar o atributo
    
    @ManyToMany(() => Course, (course) => course.tags)
    courses: Course[];

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;

    // Esse decorator será executado antes que um registro seja inserido no banco
    // Usaremos ele para gerar um id (pela biblioteca uuid), caso ele ainda não o possua
    @BeforeInsert()
    generateId() {
        if (this.id) {
            return;
        }

        this.id = uuidv4();
    }
}

