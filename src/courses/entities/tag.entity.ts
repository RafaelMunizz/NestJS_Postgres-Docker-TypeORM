import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity('tags')
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // A relação é N:N e primeiro deve ser passar o alvo, no caso vai ser o lado inverso,
    // Tag se relaciona com Course nesse lado da aplicação, e passamos como pegar o atributo
    
    @ManyToMany(() => Course, (course) => course.tags)
    courses: Course[];
}

