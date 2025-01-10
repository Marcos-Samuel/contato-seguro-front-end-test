import React from 'react';
import { StyledTypography } from './styles';

export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span'; 
    color?: string;
    size?: string;
    error?: boolean;
    weight?: string; 
    align?: 'left' | 'center' | 'right'; 
    children: React.ReactNode;
  }
  
  const Typography: React.FC<TypographyProps> = ({
    variant = 'p',
    color = 'black',
    size = '16px',
    weight = 'normal',
    align = 'left',
      children,
      error
  }) => {
    return <StyledTypography as={variant} color={color} size={size} weight={weight} align={align} error={error}>{children}</StyledTypography>;
  };

export default Typography;
