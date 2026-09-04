import brevo from "../config/brevo.js";

export const sendVerificationOTP = async (email, name, otp) => {
  await brevo.transactionalEmails.sendTransacEmail({
    sender: {
      name: process.env.SENDER_NAME,
      email: process.env.SENDER_EMAIL,
    },
    to: [
      {
        email,
        name,
      },
    ],
    subject: "Verify Your Email",
    htmlContent: `
      <h2>Email Verification</h2>
      <p>Hello ${name},</p>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 10 minutes.</p>
    `,
  });
};

export const sendResetOTP = async (email, name, otp) => {
  await brevo.transactionalEmails.sendTransacEmail({
    sender: {
      name: process.env.SENDER_NAME,
      email: process.env.SENDER_EMAIL,
    },
    to: [
      {
        email,
        name,
      },
    ],
    subject: "Reset Password",
    htmlContent: `
      <h2>Reset Password</h2>
      <p>Hello ${name},</p>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 10 minutes.</p>
    `,
  });
};
