import type { ReactNode } from "react";

type TextProps = {
  muted?: boolean;
  type?: "default" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children?: ReactNode | ReactNode[];
};

const types = {
  default: "text-slate-800",
  danger: "text-rose-400",
  success: "text-lime-600",
};

export default function Text({
  type = "default",
  size,
  children,
  muted = false,
}: TextProps) {
  return (
    <p
      className={`${size && "text-" + size} ${types[type]} ${
        muted && "text-gray-500"
      }`}
    >
      {children}
    </p>
  );
}
