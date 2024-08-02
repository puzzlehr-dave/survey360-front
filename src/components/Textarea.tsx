type TextareaProps = {
  placeholder?: string;
};

export default function Textarea({ placeholder }: TextareaProps) {
  return (
    <textarea
      className="outline-none w-full max-w-[400px] min-h-[150px] py-2 px-5 rounded-md text-sm duration-500 border border-transparent  focus:border-lime-600"
      placeholder={placeholder}
    />
  );
}
