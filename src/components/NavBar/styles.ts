import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ISidBar {
  isActive: boolean;
}

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const SidebarContainer = styled.div`
  width: 7.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f0f0f5;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarContent = styled.nav`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;
`;

export const SidebarItem = styled.li<ISidBar>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ isActive, theme }) =>
    isActive
      ? theme.colors.primary.purple[300]
      : theme.colors.system.black[200]};

  &:nth-child(2) {
    margin-top: 75px;
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-right: 3px solid ${theme.colors.primary.purple[400]};
  `}
`;

export const Text = styled.p<ISidBar>`
  color: ${({ isActive, theme }) =>
    isActive
      ? theme.colors.primary.purple[300]
      : theme.colors.system.black[400]};

  font-family: 'Rubik', sans-serif;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  width: 100%;
`;

export const DropdownContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
  }
`;

export const DropdownButton = styled.button`
  all: unset;
  padding: 10px 15px;
  width: 90%;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary.purple[300]};
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary.purple[100]};
  border-radius: 4px;
  width: 100%;
`;

export const DropdownItem = styled.li<ISidBar>`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ isActive, theme }) =>
    isActive
      ? theme.colors.primary.purple[300]
      : theme.colors.system.black[400]};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.purple[100]};
  }
`;
