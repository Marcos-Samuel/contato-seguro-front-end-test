import styled from 'styled-components';

interface ISidBar {
  isActive: boolean;
}

export const Aside = styled.aside`
  display: flex;
  width: 7.5vw;
`;

export const SidebarContainer = styled.div`
  width: 7.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: #f0f0f5;

  position: fixed;
  top: 0;
  left: 0;
`;

export const SidebarContent = styled.nav`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 45px;
`;

export const SidebarItem = styled.li<ISidBar>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#da0175' : '#343447')};

  &:nth-child(2) {
    margin-top: 75px;
  }

  &:nth-child(3) {
    margin-top: 75px;
  }

  ${({ isActive }) =>
    isActive &&
    `
    border-right: 3px solid #da0175;
  `}
`;

export const Text = styled.p<ISidBar>`
  color: ${({ isActive }) => (isActive ? '#da0175' : '#343447')};
`;
