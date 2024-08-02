type InputProps = {
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number";
};

export default function Input({ placeholder, inputType = "text" }: InputProps) {
  return (
    <input
      className="outline-none py-2 px-5 rounded-md text-sm duration-500 border border-transparent  focus:border-lime-600"
      placeholder={placeholder}
      type={inputType}
    />
  );
}
