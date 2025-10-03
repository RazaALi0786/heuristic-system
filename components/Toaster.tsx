"use client";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "@/components/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map((t) => (
        <Toast
          key={t.id}
          open={t.open}
          onOpenChange={(open) => {
            if (!open && t.onOpenChange) t.onOpenChange(false);
          }}
          variant={t.variant}
        >
          {t.title && <ToastTitle>{t.title}</ToastTitle>}
          {t.description && (
            <ToastDescription>{t.description}</ToastDescription>
          )}
          {t.action && <ToastAction>{t.action}</ToastAction>}
          <ToastClose />
        </Toast>
      ))}
    </>
  );
}
