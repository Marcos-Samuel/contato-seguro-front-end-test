import styled from 'styled-components';
import { TypographyProps } from '.';

export const StyledTypography = styled.div<TypographyProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  margin: 0;
  cursor: ${(props) => props.cursor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
  ${(props) =>
    props.variant === 'h1' &&
    `
    font-size: 2.5rem;
    font-weight: bold;
  `}

  ${(props) =>
    props.variant === 'h2' &&
    `
    font-size: 2rem;
    font-weight: semi-bold;
  `}

  ${(props) =>
    props.variant === 'h3' &&
    `
    font-size: 1.5rem;
    font-weight: normal;
  `}

${(props) =>
    props.variant === 'strong' &&
    `
    font-weight: bold;
  `}
  
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
`;
