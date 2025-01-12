import * as z from 'zod';
import { capitalizeName } from '../../utils/stringUtils';

export const bookSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => capitalizeName(name)),
  pages: z
    .string()
    .max(10000)
    .refine((val) => val === '' || /^[0-9]+$/.test(val), {
      message: 'A campo deve conter apenas números',
    })
    .optional(),

  author_id: z.string().min(1, 'O Autor é obrigatório'),
});
