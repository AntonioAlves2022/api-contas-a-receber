import { AppError } from "./AppError";

export class ConflictError extends AppError{
    constructor(message = 'Este recurso já existe'){
        super(message, 409)

    }
}