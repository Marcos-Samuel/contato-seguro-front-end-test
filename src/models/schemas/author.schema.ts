import * as z from 'zod';
import { capitalizeName } from '../../utils/stringUtils';

export const authorSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => capitalizeName(name)),
  email: z
    .string()
    .refine((val) => val === '' || /^\S+@\S+\.\S+$/.test(val), {
      message: 'Digite um e-mail válido',
    })
    .transform((email) => email.toLowerCase())
    .optional(),
});
