const api = "http://localhost:4000";
const baseurl = api + "/auth";
import axios from "axios";

/**
 * requests API to send a code to the supplied email
 * @returns {boolean} - true or false
 */
async function sendVerificationCode({
  email,
}: {
  email: string;
}): Promise<boolean> {
  try {
    const { data } = await axios.post(baseurl + "/sendVerificationCode", {
      email,
    });
    if (data.successful) {
      return true;
    }
    console.log(data.errorMessage);
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/**
 * requests API to validate if the supplied code is correct
 * @param {string} verificationCode - 4-digit code from the user input
 * @returns {boolean} - true or false
 */
async function validateVerificationCode({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) {
  try {
    const { data } = await axios.post(baseurl + "/validateVerificationCode", {
      email,
      verificationCode,
    });
    if (data.successful) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export { sendVerificationCode, validateVerificationCode };
