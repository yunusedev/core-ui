import React from "react";
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogSection,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
export interface AlertDialogProps {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  section?: React.ReactNode;
  footer?: React.ReactNode;
}
export const AlertDialog = ({
  trigger,
  title,
  description,
  section,
  footer,
}: AlertDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogBody>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogSection>{section}</DialogSection>
        <DialogFooter>{footer}</DialogFooter>
      </DialogBody>
    </Dialog>
  );
};
