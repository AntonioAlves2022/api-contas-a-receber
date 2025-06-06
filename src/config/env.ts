import {z} from 'zod'
import 'dotenv/config'

const envSchema = z.object({
    DATABASE_URL:z.string().min(1,'A URL é obrigatória'),
    PORT: z.coerce.number().default(3333),
    NODE_ENV:z.enum(['dev', 'test', 'production'])
})

const _env = envSchema.safeParse(process.env)

if(! _env.success){
    console.error('Variaveis de ambiente inválidas',
        _env.error.format())
}

export const env = _env.data
