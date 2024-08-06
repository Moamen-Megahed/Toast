type ToastType = {
  id: number;
  message: string;
  variant?: "default" | "success" | "error";
};

type ToastManager = {
  show: (message: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  dismissAll: () => void;
};

let toastId = 0;
let setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;

const createToast = (
  message: string,
  variant: ToastType["variant"] = "default"
) => {
  toastId += 1;
  setToasts((prev) => [...prev, { id: toastId, message, variant }]);
};

const dismissAllToasts = () => {
  setToasts([]);
};

export const toast: ToastManager = {
  show: (message: string) => createToast(message),
  success: (message: string) => createToast(message, "success"),
  error: (message: string) => createToast(message, "error"),
  dismissAll: () => dismissAllToasts(),
};

export const setToastManager = (
  setter: React.Dispatch<React.SetStateAction<ToastType[]>>
) => {
  setToasts = setter;
};
