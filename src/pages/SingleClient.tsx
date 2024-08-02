import { ChevronRight, Plus } from "react-feather";
import Button from "../components/Button";
import Container from "../components/Container";
import Divider from "../components/Divider";
import { Link } from "react-router-dom";
import SurveyList from "../components/Surveys/SurveyList";

export default function SingleClient() {
  return (
    <Container>
      <div className="flex items-center">
        <div className="w-3/4 flex flex-col gap-5">
          <div className="flex items-center">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 flex gap-1">
                <Link to="/clients">Clients</Link> <ChevronRight size={14} />{" "}
                PuzzleHR
              </p>
              <h1 className="text-xl font-bold text-slate-800">PuzzleHR</h1>
              <Divider color="faded" />
            </div>
            <div className="ml-auto">
              <Button
                size="smIcon"
                buttonType="primary"
                link="/clients/148/surveys/create"
                label={
                  <div className="flex gap-1">
                    <Plus size={14} /> Create a Survey
                  </div>
                }
              />
            </div>
          </div>
          <SurveyList />
        </div>
        <div className="w-1/4"></div>
      </div>
    </Container>
  );
}
