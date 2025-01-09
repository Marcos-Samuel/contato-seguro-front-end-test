import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog"; 
import styled from "styled-components";

const Button = styled.button<{ variant?: string; color?: string }>`
  background-color: ${({ color }) => (color === "red" ? "#f87171" : "#f3f4f6")};
  border: none;
  border-radius: 4px;
  color: ${({ color }) => (color === "red" ? "#fff" : "#1f2937")};
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

// Exemplo de layout Flex
const Flex = styled.div<{ gap?: string; justify?: string; mt?: string }>`
  display: flex;
  gap: ${({ gap }) => gap || "1rem"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  margin-top: ${({ mt }) => mt || "0"};
`;

const AlertDialogComponent: React.FC = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button color="red">Revoke access</Button>
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
            Revoke access
          </AlertDialog.Title>
          <AlertDialog.Description style={{ marginTop: "10px", fontSize: "14px" }}>
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </AlertDialog.Description>

          <Flex gap="1rem" mt="20px" justify="flex-end">
            <AlertDialog.Cancel asChild>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="solid" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogComponent;
