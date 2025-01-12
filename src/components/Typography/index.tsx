import React from 'react';
import { StyledTypography } from './styles';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'strong';
  color?: 'primary' | 'secondary' | 'error';
  size?: string;
  weight?: string;
  cursor?: 'pointer' | 'default';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  color = 'primary',
  size = '16px',
  weight = 'normal',
  align = 'left',
  children,
  cursor = 'default',
}) => {
  return (
    <StyledTypography
      variant={variant}
      color={color}
      size={size}
      weight={weight}
      align={align}
      cursor={cursor}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
