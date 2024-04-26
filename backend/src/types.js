import { z } from 'zod';

export const userSchema = z.object({
    email: z.string().email(),
    username: z.string().optional(),
    password: z.string().min(8)
})

export const todoSchema = z.object({
    title: z.string(),
    description: z.string()
})