import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Content, ContentIcon, Overlay, StyledIconButton } from './styles';
import Typography from '../Typography';
import { theme } from '../../styles/theme';
import ButtonComponent from '../Button';

interface ModalProps {
  children: ReactNode;
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  hidden?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open,
  setOpen,
  disabled,
  hidden,
}) => (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      <ButtonComponent disabled={disabled} hidden={hidden}>
        {title}
      </ButtonComponent>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ContentIcon>
          <Typography variant="h3" size="1" weight="16px" color="primary">
            {title}
          </Typography>
          <Dialog.Close asChild>
            <StyledIconButton aria-label="Close">
              <Cross2Icon />
            </StyledIconButton>
          </Dialog.Close>
        </ContentIcon>
        {children}
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
