import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { IconButton, TooltipArrow, TooltipContent } from './styles';
import InfoIcon from '../../assets/info.icon';

interface ITooltipMessage {
  message: React.ReactNode;
}

export const TooltipMessage = ({ message }: ITooltipMessage) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <IconButton className="TooltipContent">
            <InfoIcon />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={5}>
            {message}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
