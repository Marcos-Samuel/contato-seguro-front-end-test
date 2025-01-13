import React, { useState } from 'react';
import {
  Aside,
  NavLinkStyled,
  SidebarContainer,
  SidebarContent,
  SidebarItem,
  Text,
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from './styles';
import BookIcon from '../../assets/book.Icon';
import AuthorIcon from '../../assets/author.Icon';

const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Aside>
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>Menu</DropdownButton>
        {isDropdownOpen && (
          <DropdownMenu>
            <NavLinkStyled to="/authors">
              {({ isActive }) => (
                <DropdownItem isActive={isActive}>
                  <AuthorIcon isActive={isActive} />
                  <Text isActive={isActive}>Autores</Text>
                </DropdownItem>
              )}
            </NavLinkStyled>

            <NavLinkStyled to="/">
              {({ isActive }) => (
                <DropdownItem isActive={isActive}>
                  <BookIcon isActive={isActive} />
                  <Text isActive={isActive}>Livros</Text>
                </DropdownItem>
              )}
            </NavLinkStyled>
          </DropdownMenu>
        )}
      </DropdownContainer>

      <SidebarContainer>
        <SidebarContent>
          <NavLinkStyled to="/">
            {({ isActive }) => (
              <SidebarItem isActive={isActive}>
                <BookIcon isActive={isActive} />
                <Text isActive={isActive}>Livros</Text>
              </SidebarItem>
            )}
          </NavLinkStyled>
          <NavLinkStyled to="/authors">
            {({ isActive }) => (
              <SidebarItem isActive={isActive}>
                <AuthorIcon isActive={isActive} />
                <Text isActive={isActive}>Autores</Text>
              </SidebarItem>
            )}
          </NavLinkStyled>
        </SidebarContent>
      </SidebarContainer>
    </Aside>
  );
};

export default NavBar;
