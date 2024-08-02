import { ExternalLink } from "react-feather";
import { Link } from "react-router-dom";

type ClientCardProps = {
  name: string;
};

export default function ClientCard({ name }: ClientCardProps) {
  return (
    <div className="bg-white w-full p-5 rounded-md flex gap-2 flex-col items-start min-h-[200px]">
      <div className="flex w-full">
        <p className="text-sm text-gray-600">{name}</p>
        <div className="ml-auto">
          <Link to="/clients/148">
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
