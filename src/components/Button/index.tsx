import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface iButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string | React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  className: string;
  label: string;
  action: () => void;
}

export function Button({
  text,
  action,
  type = "submit",
  className,
  label,
}: iButtonProps) {
  return (
    <button
      aria-label={`${label}`}
      type={type}
      onClick={action}
      className={className}
    >
      {text}
    </button>
  );
}
