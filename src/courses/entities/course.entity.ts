import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('courses') // Nome da tabela no banco
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('json', {nullable: true}) // Informando que será do tipo JSON e que pode ser nulo
    tags: string[];
}