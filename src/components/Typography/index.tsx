import React from 'react';
import { StyledTypography } from './styles';

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'strong' | 'p' | 'span';
  color?: 'primary' | 'secondary' | 'error';
  size?: string;
  weight?: string;
  align?: string;
  cursor?: string;
  'data-testid'?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  color = 'primary',
  size = '16px',
  weight = 'normal',
  align = 'left',
  cursor = 'default',
  children,
  ...props
}) => {
  return (
    <StyledTypography
      as={variant}
      color={color}
      size={size}
      weight={weight}
      align={align}
      cursor={cursor}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
