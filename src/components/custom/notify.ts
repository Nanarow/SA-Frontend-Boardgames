import toast, { DefaultToastOptions } from "react-hot-toast";

export function NotifyError(message: string) {
  toast.error(message);
}

export function NotifySuccess(message: string) {
  toast.success(`${message}`, {
    duration: 3000,
  });
}

export function NotifyLoading(message: string) {
  return toast.loading(message);
}

export const toastOptions: DefaultToastOptions = {
  style: {
    background: "#ffffff",
    color: "#000000",
    boxShadow: "4px 4px rgba(0,0,0,1)",
    border: "2px solid rgba(0,0,0,1)",
    borderRadius: "4px",
  },
  className: "",
};
