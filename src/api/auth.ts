const api = "http://localhost:4000";
const baseurl = api + "/auth";
import axios from "axios";
import type { User } from "../types/users";
import type { ResponseData } from "../types/api";

/**
 * Requests API to send a code to the supplied email.
 * @returns {Object} result - The result of the API request.
 * @returns {boolean} result.successful - Indicates if the request was successful.
 * @returns {string} result.errorMessage - A message describing the result.
 */
async function sendVerificationCode({
  email,
}: {
  email: string;
}): Promise<ResponseData> {
  try {
    const { data } = await axios.post(baseurl + "/sendVerificationCode", {
      email,
    });
    return data;
  } catch (err) {
    console.log(err);
    return {
      successful: false,
      errorMessage: "Technical error, contact developer",
    };
  }
}

/**
 * requests API to validate if the supplied code is correct
 * @param {string} verificationCode - 4-digit code from the user input
 * @returns {Object} result - The result of the API request.
 * @returns {boolean} result.successful - Indicates if the request was successful.
 * @returns {string} result.errorMessage - A message describing the result.
 */
async function validateVerificationCode({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}): Promise<
  ResponseData & {
    data?: { user: User };
  }
> {
  try {
    const { data } = await axios.post(baseurl + "/validateVerificationCode", {
      email,
      verificationCode,
    });
    return data;
  } catch (err) {
    console.log(err);
    return {
      successful: false,
      errorMessage: "Technical error, contact developer",
    };
  }
}

export { sendVerificationCode, validateVerificationCode };
