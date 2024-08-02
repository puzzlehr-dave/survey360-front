import { Link } from "react-router-dom";
import Container from "../components/Container";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  BarChart2,
  ChevronRight,
  Save,
  Send,
  User,
} from "react-feather";
import Divider from "../components/Divider";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

export default function CreateSurvey() {
  return (
    <Container>
      <div className="flex items-center">
        <div className="w-3/4 flex flex-col gap-5">
          <div className="flex items-center">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 flex gap-1">
                <Link to="/clients">Clients</Link> <ChevronRight size={14} />
                <Link to="/clients/148">PuzzleHR</Link>{" "}
                <ChevronRight size={14} /> Create a Survey
              </p>
              <h1 className="text-xl font-bold text-slate-800 flex items-center">
                <BarChart2 size={20} />
                Create a Survey
              </h1>
              <Divider color="faded" />
            </div>
            <div className="ml-auto flex gap-2">
              <Button
                size="smIcon"
                buttonType="secondary"
                link="/clients/148/surveys/create"
                label={
                  <div className="flex gap-1">
                    <Save size={14} /> Save Survey
                  </div>
                }
              />

              <Button
                size="smIcon"
                buttonType="primary"
                link="/clients/148/surveys/create"
                label={
                  <div className="flex gap-1">
                    <Send size={14} /> Save and Deploy
                  </div>
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-sm text-slate-600 flex items-center gap-1">
                <User size={14} /> Employee Name
              </p>
              <Input />
            </div>

            <div className="flex gap-2">
              <div className="w-1/3 flex flex-col gap-2 items-start">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <div className="flex">
                    <User size={14} />
                    <ArrowUp size={14} />
                  </div>
                  Bosses
                </p>
                <Textarea placeholder="Input comma-delimited emails" />
              </div>

              <div className="w-1/3 flex flex-col gap-2 items-start">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <div className="flex">
                    <User size={14} />
                    <ArrowLeft size={14} />
                  </div>
                  Peers
                </p>
                <Textarea placeholder="Input comma-delimited emails" />
              </div>

              <div className="w-1/3 flex flex-col gap-2 items-start">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <div className="flex">
                    <User size={14} />
                    <ArrowDown size={14} />
                  </div>
                  Peers
                </p>
                <Textarea placeholder="Input comma-delimited emails" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
    </Container>
  );
}
