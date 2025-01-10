import * as z from 'zod';
import { capitalizeName } from '../../utils/stringUtils';

export const bookSchema = z.object({
  name: z
    .string()
    .min(1, 'O nome é obrigatório')
    .max(50, 'O nome deve ter no máximo 50 caracteres')
    .refine((name) => {
      return capitalizeName(name);
    }),
  pages: z.string().max(10000).optional(),
  author_id: z.string().min(1, 'O Autor é obrigatório'),
});
