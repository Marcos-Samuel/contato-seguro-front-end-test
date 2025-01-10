import * as z from 'zod';
import { bookSchema } from '../../schemas/book.schema';

export type FormBookData = z.infer<typeof bookSchema>;
