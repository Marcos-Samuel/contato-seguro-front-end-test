import styled, { keyframes } from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

export const slideUpAndFade = keyframes`
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const slideRightAndFade = keyframes`
    0% { opacity: 0; transform: translateX(-2px); }
    100% { opacity: 1; transform: translateX(0); }
`;

export const slideDownAndFade = keyframes`
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const slideLeftAndFade = keyframes`
  0% { opacity: 0; transform: translateX(2px); }
  100% { opacity: 1; transform: translateX(0); }
`;

export const TooltipContent = styled(Tooltip.Content)`
  border-radius: 8px;
  padding: 10px 15px;
  line-height: 1;
  z-index: 6;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.system.black[500]};
  background-color: ${({ theme }) => theme.colors.system.black[100]};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &[data-state='delayed-open'] {
    &[data-side='bottom'] {
      animation: ${slideUpAndFade};
    }
    &[data-side='top'] {
      animation: ${slideDownAndFade};
    }
    &[data-side='right'] {
      animation: ${slideLeftAndFade};
    }
    &[data-side='left'] {
      animation: ${slideRightAndFade};
    }
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const IconButton = styled.button`
  all: unset;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  font-size: 0.6rem;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.purple[300]};
  background-color: transparent ${({ theme }) => theme.colors.system.black[100]};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.system.black[200]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.system.black[100]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.system.black[500]};
  }
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.system.black[200]};
`;
