import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { TrashIcon } from '@radix-ui/react-icons';
import { Button, Flex, Overlay, Content, Title, Description } from './styles';

interface AlertDialogComponentProps {
  message: string;
  onClick: (id: string) => void;
  id: string;
}

const AlertDialogComponent: React.FC<AlertDialogComponentProps> = ({
  message,
  onClick,
  id,
}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button color="red">
          <TrashIcon />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content>
          <Title>Deletar</Title>
          <Description>{message}</Description>
          <Flex gap="1rem" mt="20px" justify="flex-end">
            <AlertDialog.Cancel asChild>
              <Button variant="soft">Cancelar</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant="solid"
                color="purple"
                onClick={() => onClick(id)}
              >
                Confirmar
              </Button>
            </AlertDialog.Action>
          </Flex>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogComponent;
