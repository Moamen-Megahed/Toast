import { useState, useEffect } from "react";
import { Toast, ToastType } from "./Toast";
import { setToastManager } from "./toastManager";

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    setToastManager(setToasts);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 p-4 space-y-2 max-w-xs">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() =>
            setToasts((prev) => prev.filter((t) => t.id !== toast.id))
          }
        />
      ))}
    </div>
  );
}
