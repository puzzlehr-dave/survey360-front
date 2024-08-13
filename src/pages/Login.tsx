import Button from "../components/Button";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Input from "../components/Input";
import Text from "../components/Text";

import { useNavigate } from "react-router-dom";

// api
import { sendVerificationCode, validateVerificationCode } from "../api/auth.ts";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  async function handleSendVerificationCode() {
    if (email === "") return toast.warn("Please input email");

    const verificationCodeSent = await sendVerificationCode({ email });
    if (verificationCodeSent.successful) {
      setStep(2);
    } else {
      toast.error(verificationCodeSent.errorMessage);
    }
  }

  async function handleValidateVerificationCode() {
    if (verificationCode === "") return toast.warn("Please input email");

    const validated = await validateVerificationCode({
      email,
      verificationCode,
    });
    if (validated.successful) {
      console.log(validated);
      Cookies.set("signedIn", "true");
      if (validated.data) {
        Cookies.set("userDetails", JSON.stringify(validated.data.user));
      }
      navigate("/clients");
    } else {
      toast.error(validated.errorMessage);
    }
  }

  return (
    <Container>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-slate-800 flex items-center">
            Access Dashboard
          </h1>
          <Divider color="faded" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          {step === 1 && (
            <>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <Button
                onClick={() => handleSendVerificationCode()}
                size="sm"
                label="Login"
              />
            </>
          )}
          {step === 2 && (
            <>
              <Text size="sm" muted>
                Enter the verification code sent to <strong>{email}</strong>
              </Text>
              <Input
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Verification Code"
              />
              <Button
                onClick={() => handleValidateVerificationCode()}
                size="sm"
                label="Submit"
              />
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
