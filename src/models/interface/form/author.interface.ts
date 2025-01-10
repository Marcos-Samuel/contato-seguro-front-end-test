import * as z from 'zod';
import { authorSchema } from '../../schemas/book.schema';

export type FormAuthorData = z.infer<typeof authorSchema>;
