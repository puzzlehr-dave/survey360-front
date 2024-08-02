import SurveyItem from "./SurveyItem";

const surveys = [
  { name: "Just Batman" },
  { name: "Doctor Strange" },
  { name: "Black Widow" },
  { name: "Captain America" },
];

export default function SurveyList() {
  return (
    <div className="flex flex-col gap-3">
      {surveys.map((s) => (
        <div key={s.name}>
          <SurveyItem name={s.name} />
        </div>
      ))}
    </div>
  );
}
