import styled from 'styled-components';

export const ButtonStyled = styled.button<{
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  hidden?: boolean;
}>`
  all: unset;
  display: ${({ hidden }) => (hidden ? 'none' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.system.black[300]};

  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.system.black[300];
    switch (variant) {
      case 'primary':
        return theme.colors.primary.purple[300];
      case 'secondary':
        return theme.colors.system.black[300];
      case 'danger':
        return theme.colors.system.error[300];
      default:
        return theme.colors.primary.purple[300];
    }
  }};

  color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.system.black[500];
    switch (variant) {
      case 'primary':
      case 'danger':
        return theme.colors.primary.purple[100];
      case 'secondary':
        return theme.colors.system.black[100];
      default:
        return theme.colors.primary.purple[100];
    }
  }};

  &:hover {
    background-color: ${({ theme, variant, disabled }) => {
      if (disabled) return theme.colors.system.black[300];
      switch (variant) {
        case 'primary':
          return theme.colors.primary.purple[400];
        case 'secondary':
          return theme.colors.system.black[400];
        case 'danger':
          return theme.colors.system.error[400];
        default:
          return theme.colors.primary.purple[400];
      }
    }};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme, variant, disabled }) => {
        if (disabled) return theme.colors.system.black[300];
        switch (variant) {
          case 'primary':
            return theme.colors.primary.purple[400];
          case 'secondary':
            return theme.colors.system.black[400];
          case 'danger':
            return theme.colors.system.error[400];
          default:
            return theme.colors.primary.purple[400];
        }
      }};
  }
`;
