import styled from 'styled-components';

export const StyledTypography = styled.div<{
  color?: 'primary' | 'secondary' | 'error';
  size?: string;
  weight?: string;
  align?: string;
  cursor?: string;
}>`
  color: ${({ theme, color }) => {
    switch (color) {
      case 'primary':
        return theme.colors.primary.purple[300];
      case 'secondary':
        return theme.colors.system.black[300];
      case 'error':
        return theme.colors.system.error[300];
      default:
        return theme.colors.system.black[500];
    }
  }};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  cursor: ${({ cursor }) => cursor};
`;
