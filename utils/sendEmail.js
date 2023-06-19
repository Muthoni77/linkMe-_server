import nodemailer from "nodemailer";

export const sendWelcomeEmail = async () => {
  try {
    //create a transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "linkme685@gmail.com",
        pass: "@Ateller22",
      },
    });
    //send email using transport

    const response=await transporter.sendMail({
        
    })
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
