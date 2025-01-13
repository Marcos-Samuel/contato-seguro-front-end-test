import React from 'react';
import {
  Container,
  ContentFooter,
  CopyRight,
  Logo,
  Nav,
  NavLinkStyled,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContentFooter>
        <Logo>Biblioteca</Logo>
        <Nav>
          <NavLinkStyled to="/">Livros</NavLinkStyled>
          <NavLinkStyled to="/authors">Autor</NavLinkStyled>
        </Nav>
        <CopyRight>&copy; 2025 My Website. All rights reserved.</CopyRight>
      </ContentFooter>
    </Container>
  );
};

export default Footer;
