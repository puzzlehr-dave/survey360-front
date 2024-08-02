import { BarChart2 } from "react-feather";

type SurveyItemProps = {
  name: string;
};

export default function SurveyItem({ name }: SurveyItemProps) {
  return (
    <div className="flex items-center gap-2 bg-white py-3 px-5 rounded-md">
      <p className="text-slate-800">{name}</p>
      <div className="">
        <p className="text-xs text-gray-400 flex gap-1 items-center">
          <BarChart2 size={12} />
          View stats
        </p>
      </div>
    </div>
  );
}
