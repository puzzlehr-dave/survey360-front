import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string | ReactNode;
  buttonType?: "primary" | "secondary";
  link?: string;
  size?: "sm" | "smIcon" | "md" | "lg";
  onClick?: () => void;
};

const buttonSizes = {
  sm: "text-xs py-2 px-5",
  smIcon: "text-xs p-2",
  md: "text-sm py-3 px-5",
  lg: "text-sm p-3 px-5",
};

const buttonStyles = {
  primary: "bg-lime-600 text-white",
  secondary: "bg-slate-800 text-white",
};

export default function Button({
  label,
  buttonType = "secondary",
  link,
  size = "md",
  onClick,
}: ButtonProps) {
  const buttonClass = `${buttonSizes[size]} rounded-md flex justify-center ${buttonStyles[buttonType]}`;

  const buttonElement = (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );

  return link ? <Link to={link}>{buttonElement}</Link> : buttonElement;
}
