import React from "react";
import { Aside, NavLinkStyled, SidebarContainer, SidebarContent, SidebarItem, Text } from "./styles";
import BookIcon from "../../assets/bookIcon";
import AuthorIcon from "../../assets/autorIcon";

const NavBar: React.FC = () => {
  return (
    <Aside>
      <SidebarContainer>
        <SidebarContent>
          <NavLinkStyled to="/" >
            {({ isActive }) => (
              <SidebarItem isActive={isActive}>
                <BookIcon isActive={isActive} />
                <Text isActive={isActive}>Livros</Text>
              </SidebarItem>
            )}
          </NavLinkStyled>

          <NavLinkStyled to="/authors" >
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
