import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ButtonModal, Content, ContentIcon, Overlay, StyledIconButton, Title } from "./styles";

interface ModalProps {
  children: ReactNode;
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

const Modal: React.FC<ModalProps> = ({ children, title, open, setOpen }) => (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      <ButtonModal purple>{ title }</ButtonModal>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ContentIcon>
          <Title>{title}</Title>
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
