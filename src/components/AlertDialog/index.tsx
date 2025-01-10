import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog"; 
import { TrashIcon } from "@radix-ui/react-icons"
import { Button, Flex } from "./styles";

interface AlertDialogComponentProps {
    message: string;
}

const AlertDialogComponent: React.FC<AlertDialogComponentProps> = ({message}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
              <Button color="red">{ <TrashIcon/>}</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            inset: 0,
          }}
        />
        <AlertDialog.Content
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            maxWidth: "450px",
            margin: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <AlertDialog.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
            Deletar
          </AlertDialog.Title>
          <AlertDialog.Description style={{ marginTop: "10px", fontSize: "14px" }}>
            {message}
          </AlertDialog.Description>

          <Flex gap="1rem" mt="20px" justify="flex-end">
            <AlertDialog.Cancel asChild>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="solid" color="red">
                Confirmar
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogComponent;
