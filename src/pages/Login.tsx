import Button from "../components/Button";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Input from "../components/Input";

export default function Login() {
  return (
    <Container>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-slate-800 flex items-center">
            Login to Dashboard
          </h1>
          <Divider color="faded" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Input placeholder="Email" />
          <Input inputType="password" placeholder="Password" />
          <Button size="sm" link="/clients" label="Login" />
        </div>
      </div>
    </Container>
  );
}
