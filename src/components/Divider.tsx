type DividerProps = {
  type?: "short" | "medium" | "full";
  color?: "primary" | "secondary" | "faded";
};

const dividerType = {
  short: "w-[50px]",
  medium: "w-[120px]",
  full: "w-full",
};

const dividerColor = {
  primary: "bg-lime-600",
  secondary: "bg-slate-800",
  faded: "bg-slate-300",
};

export default function Divider({
  type = "short",
  color = "secondary",
}: DividerProps) {
  return (
    <div
      className={`h-[1px] ${dividerType[type]} ${dividerColor[color]} bg-slate-800`}
    />
  );
}
