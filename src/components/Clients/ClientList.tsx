import ClientCard from "./ClientCard";

const clients = [
  { name: "PuzzleHR" },
  { name: "Coca Cola" },
  { name: "The Bloggs Group" },
];

export default function ClientList() {
  return (
    <div className="flex gap-5">
      {clients.map((c) => (
        <div className="w-1/3" key={c.name}>
          <ClientCard name={c.name} />
        </div>
      ))}
    </div>
  );
}
