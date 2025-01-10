import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { IconButton as ThemeIconButton } from '@radix-ui/themes';

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
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

  display: flex;
  flex-direction: column;

  align-items: center;
  &:focus {
    outline: none;
  }
`;
export const ContentIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8rem;
`;

export const StyledIconButton = styled(ThemeIconButton)`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  color: var(--mauve-12);
  font-size: 17px;
`;

export const ButtonModal = styled.button<{ purple?: boolean }>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  background-color: ${({ theme, purple }) =>
    purple
      ? theme.colors.primary.purple[300]
      : theme.colors.primary.purple[100]};
  color: ${({ theme, purple }) =>
    purple
      ? theme.colors.primary.purple[100]
      : theme.colors.primary.purple[300]};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.system.black[300]};

  &:hover {
    background-color: ${({ theme, purple }) =>
      purple
        ? theme.colors.primary.purple[400]
        : theme.colors.primary.purple[300]};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme, purple }) =>
        purple
          ? theme.colors.primary.purple[400]
          : theme.colors.primary.purple[300]};
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
  color: var(--violet-11);
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: var(--violet-4);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--violet-7);
  }
`;
