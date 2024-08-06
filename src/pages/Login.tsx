import Button from "../components/Button";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Input from "../components/Input";
import Text from "../components/Text";

import { useNavigate } from "react-router-dom";

// api
import { sendVerificationCode, validateVerificationCode } from "../api/auth.ts";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("rlontayao@puzzlehr.com");
  const [verificationCode, setVerificationCode] = useState("");
  const [wrongVerificationCode, setWrongVerificationCode] = useState(false);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  async function handleSendVerificationCode() {
    const verificationCodeSent = await sendVerificationCode({ email });
    if (verificationCodeSent) {
      setStep(2);
    } else {
      // TODO: Throw an error splash screen
    }
  }

  async function handleValidateVerificationCode() {
    const validated = await validateVerificationCode({
      email,
      verificationCode,
    });
    if (validated) {
      // TODO: save user details/code to cookies
      navigate("/clients");
    } else {
      setWrongVerificationCode(true);
      setTimeout(() => {
        setWrongVerificationCode(false);
      }, 3000);
      // TODO: Show wrong token or Throw and error splash screen
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
              {wrongVerificationCode ? (
                <Text size="sm" type="danger">
                  That doesn't seem right. Can you please try again?
                </Text>
              ) : (
                <Text size="sm" muted>
                  Enter the verification code sent to <strong>{email}</strong>
                </Text>
              )}
              <Input
                error={wrongVerificationCode}
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
