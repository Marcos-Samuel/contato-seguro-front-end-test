import React from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  hidden?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  hidden = false,
  onClick,
  children,
  type = 'button',
}) => {
  return (
    <ButtonStyled
      variant={variant}
      hidden={hidden}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
