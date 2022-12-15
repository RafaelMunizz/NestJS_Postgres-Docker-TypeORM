// A interrogação serve para se o usuário não quiser mandar todos os campos, 

import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

// então ela alterará apenas o que receber 
export class UpdateCourseDto extends PartialType(CreateCourseDto){}
