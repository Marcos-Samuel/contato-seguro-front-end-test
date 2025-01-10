import * as z from 'zod';
import { capitalizeName } from '../../utils/stringUtils';

export const authorSchema = z.object({
  name: z
    .string()
    .min(1, 'O nome é obrigatório')
    .max(50, 'O nome deve ter no máximo 50 caracteres')
    .refine((name) => {
      return capitalizeName(name);
    }),
  email: z
    .string()
    .refine((val) => val === '' || /^\S+@\S+\.\S+$/.test(val), {
      message: 'Digite um e-mail válido',
    })
    .optional(),
});
