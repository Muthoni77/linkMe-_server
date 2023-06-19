import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (recipientEmail) => {
  try {
    //create a transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "linkme685@gmail.com",
        pass: "rochfgehdndjpmpn",
      },
    });
    //send email using transport

    const response = await transporter.sendMail({
      from: "linkMe@gmail.com", // sender address
      //   to:[recipientEmail],
      to: ["jbaraza46@gmail.com", "gloriamuthoni25@gmail.com"], // list of receivers
      subject: "Welcome to link me.", // Subject line
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="p-8">
    <div class="rounded-lg bg-green-100 p-10">
      <h1 class="mx-auto font-bold text-xl text-center">Welcome to Link Me</h1>

      <p class="mt-4">
        Deserunt ad deserunt ipsum sit consectetur ex ut eiusmod. Cupidatat
        occaecat officia pariatur veniam voluptate velit ut eu proident cillum
        velit labore exercitation. Do consequat reprehenderit mollit velit ut
        elit fugiat dolor enim esse pariatur do ullamco. Elit amet irure
        exercitation Lorem non ea commodo nostrud.
      </p>
      <p class="mt-4">
        Please verify your account by clicking on the button below
      </p>
      <div class="mt-4 flex justify-center">
        <button
          class="rounded bg-[#007acc] hover:bg-[#00609f] text-white p-3 mx-auto"
        >
          Verify Account
        </button>
      </div>
    </div>
  </body>
</html>
`, // html body
    });

    console.log("response");
    console.log(response);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
