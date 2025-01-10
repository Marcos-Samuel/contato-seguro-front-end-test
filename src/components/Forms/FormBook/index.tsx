import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonModal } from '../../Modal/styles';
import { ContentInput, Form, Input, Label, Option, Select } from '../styles';
import { Book } from '../../../models/interface/api/book.interface';
import { useAuthorContext } from '../../../contexts/AuthorContext';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Typography';
import { Dialog } from '@radix-ui/themes';
import { FormBookData } from '../../../models/interface/form/book.interface';
import { bookSchema } from '../../../models/schemas/book.schema';
import { useBookContext } from '../../../contexts/BookContext';

interface FormBookProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormBook: React.FC<FormBookProps> = ({ setOpen }) => {
  const { authors,  } = useAuthorContext();
  const { addBook } = useBookContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormBookData>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = (data: FormBookData) => {
    console.log(data);

    const newBook: Book = {
      id: uuidv4(),
      name: data.name,
      author_id: data.author_id,
      pages: data.pages || '-',
    };

    addBook(newBook);
    setOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContentInput>
        <Label>Nome do livro</Label>
        <Input {...register('name')} />
        {errors.name && <Typography variant="span" error>{errors.name.message}</Typography>}
      </ContentInput>

      <ContentInput>
        <Label>Autor</Label>
        <Select {...register('author_id')}>
          <Option  value="">Selecione um autor</Option >
          {authors.map((author) => (
            <Option  key={author.id} value={author.id}>
              {author.name}
            </Option >
          ))}
        </Select>
        {errors.author_id && <Typography variant="span" error>{errors.author_id.message}</Typography>}
      </ContentInput>

      <ContentInput>
        <Label>Páginas</Label>
        <Input  {...register('pages')} />
        {errors.pages && <Typography variant="span" error>{errors.pages.message}</Typography>}
      </ContentInput>

      <ButtonModal type="submit" purple>Enviar</ButtonModal>

      <Dialog.Close>
        <ButtonModal type="button" purple>Fechar</ButtonModal>
      </Dialog.Close>
    </Form>
  );
};

export default FormBook;
