import { Link } from "react-router-dom";
import Button from "../components/Button";
import ClientList from "../components/Clients/ClientList";
import Container from "../components/Container";
import Divider from "../components/Divider";
import { Plus } from "react-feather";

export default function Clients() {
  return (
    <Container>
      <div className="flex items-center">
        <div className="flex flex-col gap-5 w-3/4">
          <div className="flex items-center">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 flex gap-1">
                <Link to="/clients">Clients</Link>
              </p>
              <h1 className="text-xl font-bold text-slate-800">Clients</h1>
              <Divider color="faded" />
            </div>
            <div className="ml-auto">
              <Button
                size="smIcon"
                buttonType="primary"
                label={
                  <div className="flex gap-1">
                    <Plus size={14} /> Create Client
                  </div>
                }
              />
            </div>
          </div>
          <ClientList />
        </div>

        <div className="w-1/4"></div>
      </div>
    </Container>
  );
}
