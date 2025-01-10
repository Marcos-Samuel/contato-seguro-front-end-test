import styled from 'styled-components';

export const Button = styled.button<{ variant?: string; color?: string }>`
  display: flex;
  background-color: ${({ color }) => (color === 'red' ? '#f87171' : '#f3f4f6')};
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
