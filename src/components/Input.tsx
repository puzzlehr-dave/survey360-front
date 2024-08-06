import type { ChangeEvent } from "react";

type InputProps = {
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number";
  error?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholder,
  inputType = "text",
  error,
  onChange,
}: InputProps) {
  return (
    <input
      onChange={(e) => onChange(e)}
      className={`outline-none py-2 px-5 rounded-md text-sm duration-200 border border-transparent bg-white focus:border-lime-600 ${
        error && "border-rose-400 text-rose-400"
      }`}
      placeholder={placeholder}
      type={inputType}
      disabled={error}
    />
  );
}
