import {z} from 'zod'

export const userSchema = z.object({
    id:z.string().uuid(),
    name: z.string().min(3, 'O nome deve ter pelo menos 3 letras'),
    email:z.string().email('Digite um e-mail válido'),
    password:z.string().min(8,'A senha deve ter pelo menos 8 caracteres').max(24,'A senha deve ter no máximo 24 caracteres')
})

export type UserInput = z.infer<typeof userSchema>