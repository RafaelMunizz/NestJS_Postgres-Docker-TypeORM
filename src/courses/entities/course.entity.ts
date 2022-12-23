import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.entity";

import {v4 as uuidv4} from 'uuid'; // Biblioteca para gerar Id's

@Entity('courses') // Nome da tabela no banco
export class Course {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable({name: 'courses_tags'})
    @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {
        cascade: true,
    })
    tags: Tag[];

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