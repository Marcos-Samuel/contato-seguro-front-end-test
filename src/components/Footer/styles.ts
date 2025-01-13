import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
interface ISidBar {
  isActive: boolean;
}

export const Container = styled.footer`
  height: 200px;
  display: flex;
  justify-content: center;
`;

export const ContentFooter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.purple[200]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;

  border-top: 1px solid ${({ theme }) => theme.colors.primary.purple[300]};
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary.purple[400]};
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.purple[400]};
  }
`;

export const CopyRight = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary.purple[300]};
  margin-top: 2rem;
`;
export const Text = styled.p<ISidBar>`
  color: ${({ isActive, theme }) =>
    isActive
      ? theme.colors.primary.purple[300]
      : theme.colors.system.black[400]};

  font-family: 'Rubik', sans-serif;
`;
