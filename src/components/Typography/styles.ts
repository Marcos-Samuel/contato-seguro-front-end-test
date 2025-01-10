import styled from 'styled-components';
import { TypographyProps } from '.';

export const StyledTypography = styled.div<TypographyProps>`
  color: ${(props) =>
    props.error ? props.theme.colors.system.error[300] : props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  margin: 0;
`;
