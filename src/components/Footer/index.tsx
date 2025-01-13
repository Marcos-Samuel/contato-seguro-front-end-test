import React from 'react';
import {
  Container,
  ContentFooter,
  CopyRight,
  Logo,
  Nav,
  NavLinkStyled,
  Text,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContentFooter>
        <Logo>Biblioteca</Logo>
        <Nav>
          <NavLinkStyled to="/">
            {({ isActive }) => <Text isActive={isActive}>Livros</Text>}
          </NavLinkStyled>
          <NavLinkStyled to="/authors">
            {({ isActive }) => <Text isActive={isActive}>Autores</Text>}
          </NavLinkStyled>
        </Nav>
        <CopyRight>&copy; 2025 My Website. All rights reserved.</CopyRight>
      </ContentFooter>
    </Container>
  );
};

export default Footer;
