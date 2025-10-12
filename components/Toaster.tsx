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

interface ToastItem {
  id: string | number;
  open: boolean;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "success" | "error" | "warning";
  onOpenChange?: (open: boolean) => void;
}

export function Toaster() {
  const { toasts } = useToast() as { toasts: ToastItem[] }; // Type the hook output

  return (
    <>
      {toasts.map((t) => (
        <Toast
          key={t.id}
          open={t.open}
          onOpenChange={(open) => {
            if (!open && t.onOpenChange) t.onOpenChange(false);
          }}
          variant={
            t.variant
              ? t.variant === "error" || t.variant === "warning"
                ? "destructive"
                : "default"
              : undefined
          }
        >
          {t.title && <ToastTitle>{t.title}</ToastTitle>}
          {t.description && (
            <ToastDescription>{t.description}</ToastDescription>
          )}
          {t.action && <ToastAction altText={""}>{t.action}</ToastAction>}
          <ToastClose />
        </Toast>
      ))}
    </>
  );
}
