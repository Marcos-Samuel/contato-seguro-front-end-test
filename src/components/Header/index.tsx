import { Container, ContentTitle, Title } from "./styles";

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Container>
      <ContentTitle>
        <Title>{title}</Title>
      </ContentTitle>
      
    </Container>)
    
  ;
}

export default Header;