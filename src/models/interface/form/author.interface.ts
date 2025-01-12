import * as z from 'zod';
import { authorSchema } from '../../schemas/author.schema';

export type FormAuthorData = z.infer<typeof authorSchema>;
