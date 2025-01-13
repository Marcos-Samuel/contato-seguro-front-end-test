import React from 'react';
import AuthorIcon from '../../assets/author.Icon';
import BookIcon from '../../assets/book.Icon';
import Typography from '../Typography';
import { Container, ContentTitle } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <ContentTitle>
        {title === 'Livros' ? (
          <BookIcon isActive={title === 'Livros'} />
        ) : (
          <AuthorIcon isActive={title === 'Autores'} />
        )}

        <Typography variant="h1" color="primary">
          {title}
        </Typography>
      </ContentTitle>
    </Container>
  );
};

export default Header;
