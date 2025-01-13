import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { IconButton as ThemeIconButton } from '@radix-ui/themes';
import { theme } from '../../styles/theme';

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 446px;
  max-width: 400px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  &:focus {
    outline: none;
  }
  background: linear-gradient(
    135deg,
    #fff,
    ${({ theme }) => theme.colors.primary.purple[300]}
  );

  border: 2px solid ${({ theme }) => theme.colors.system.black[400]};
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.5s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ContentIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledIconButton = styled(ThemeIconButton)`
  background: none;
  border: none;
  padding: 0;
  position: fixed;
  left: 350px;
  justify-content: flex-end;
  cursor: pointer;

  @media (max-width: 350px) {
    left: 250px;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }
`;

export const IconButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: ${theme.colors.primary.purple[300]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.primary.purple[200]};
  }
`;
