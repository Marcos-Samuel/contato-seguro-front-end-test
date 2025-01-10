import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonModal } from '../../Modal/styles';
import { ContentInput, Form, Input, Label } from '../styles';
import { authorSchema } from '../../../models/schemas/author.schema';
import { FormAuthorData } from '../../../models/interface/form/author.interface';
import { Author } from '../../../models/interface/api/author.interface';
import { useAuthorContext } from '../../../contexts/AuthorContext';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Typography';
import { Dialog } from '@radix-ui/themes';

interface FormAuthorProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormAuthor: React.FC<FormAuthorProps> = ({setOpen}) => {
  
  const { addAuthor } = useAuthorContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAuthorData>({
    resolver: zodResolver(authorSchema),
  });

  const onSubmit = (data: FormAuthorData) => {
    console.log(data);
    const newAuthor: Author = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
    };
    addAuthor(newAuthor);
    setOpen(false);
  };

  return (
      
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContentInput>
              <Label>Nome</Label>
              <Input {...register('name')} />
              {errors.name && <Typography variant='span' error >{errors.name.message}</Typography>}
            </ContentInput>

            <ContentInput>
              <Label>E-mail</Label>
              <Input {...register('email')} />
              {errors.email && <Typography variant='span' error >{errors.email.message}</Typography>}
        </ContentInput> 
        <ButtonModal type="submit" purple>Enviar</ButtonModal>
            <Dialog.Close>
          <ButtonModal type="button" purple>
            Fechar
          </ButtonModal>
            </Dialog.Close>
          </Form>
  );
}

export default FormAuthor;