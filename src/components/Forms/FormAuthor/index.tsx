import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContentButton, ContentInput, Form, Input, Label } from '../styles';
import { authorSchema } from '../../../models/schemas/author.schema';
import { FormAuthorData } from '../../../models/interface/form/author.interface';
import { Author } from '../../../models/interface/api/author.interface';
import { useAuthorContext } from '../../../contexts/AuthorContext';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Typography';
import { Dialog } from '@radix-ui/themes';
import Button from '../../Button';

interface FormAuthorProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormAuthor: React.FC<FormAuthorProps> = ({ setOpen }) => {
  const { addAuthor, error } = useAuthorContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormAuthorData>({
    resolver: zodResolver(authorSchema),
  });

  const onSubmit = async (data: FormAuthorData) => {
    if (error) {
      setError('email', {
        type: 'custom',
        message: error,
      });
      return;
    }
    const newAuthor: Author = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
    };
    await addAuthor(newAuthor);
    setOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContentInput>
        <Label>Nome</Label>
        <Input {...register('name')} />
        {errors.name && (
          <Typography variant="span" size="12px" color="error">
            {errors.name.message}
          </Typography>
        )}
      </ContentInput>

      <ContentInput>
        <Label>E-mail</Label>
        <Input {...register('email')} />
        {errors.email && (
          <Typography variant="span" size="12px" color="error">
            {errors.email.message}
          </Typography>
        )}
      </ContentInput>
      <ContentButton>
        <Button type="submit">Enviar</Button>
        <Dialog.Close>
          <Button type="button" variant="danger">
            Fechar
          </Button>
        </Dialog.Close>
      </ContentButton>
    </Form>
  );
};

export default FormAuthor;
