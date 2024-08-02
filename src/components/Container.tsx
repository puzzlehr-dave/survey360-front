import { ReactNode } from "react";

export default function Container({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return <div className="max-w-[980px] mx-auto py-3 px-2">{children}</div>;
}
