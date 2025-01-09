import { useState } from "react";
import { Aside, SidebarContainer, SidebarContent, SidebarItem, Text } from "./styles";
import BookIcon from "../../assets/bookIcon";
import AuthorIcon from "../../assets/autorIcon";



const NavBar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Aside>
      <SidebarContainer>
        <SidebarContent>
          <SidebarItem isActive={isActive}  onClick={() => ""}>
            <BookIcon isActive={isActive}  />
            <Text isActive={isActive} >Livros</Text>
          </SidebarItem>

          <SidebarItem
            isActive={isActive} 
          >
            <AuthorIcon/>
            <Text isActive={isActive} >Autores</Text>
          </SidebarItem>
        </SidebarContent>
      </SidebarContainer>
    </Aside>
  );
}
export default NavBar;