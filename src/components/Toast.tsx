export type ToastType = {
  id: number;
  message: string;
  variant?: "default" | "success" | "error";
};

type ToastProps = ToastType & {
  onClose: () => void;
};

export function Toast({ message, variant = "default", onClose }: ToastProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-800 text-white";
    }
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md flex items-center justify-between ${getVariantClasses()}`}
    >
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-lg focus:outline-none">
        &times;
      </button>
    </div>
  );
}
