import { IsString } from "class-validator";

// Estrutura da classe com seus atributos
// Tipo da informação que é enviada no corpo da requisição
export class CreateCourseDto {

    @IsString() // Método de validação se é uma string que está vindo
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString({each: true}) // Verificando se cada iten do array é uma string
    readonly tags: string[];
}
