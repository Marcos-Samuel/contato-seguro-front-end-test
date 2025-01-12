import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styled from 'styled-components';

export const Button = styled.button<{ variant?: string; color?: string }>`
  display: flex;
  background-color: ${({ color, theme }) =>
    color ? theme.colors.primary.purple[300] : '#f3f4f6'};
  border: none;
  border-radius: 4px;
  color: ${({ color }) => (color === 'red' ? '#fff' : '#1f2937')};
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const Flex = styled.div<{
  gap?: string;
  justify?: 'center' | 'start' | 'end' | 'between' | 'flex-start' | 'flex-end';
  mt?: string;
}>`
  display: flex;
  gap: ${({ gap }) => gap || '1rem'};
  justify-content: ${({ justify }) =>
    justify === 'start'
      ? 'flex-start'
      : justify === 'end'
        ? 'flex-end'
        : justify};
  margin-top: ${({ mt }) => mt || '0'};
`;

export const Overlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

export const Content = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 450px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled(AlertDialog.Title)`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled(AlertDialog.Description)`
  margin-top: 10px;
  font-size: 14px;
`;
