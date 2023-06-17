import Africastalking from "africastalking";

const sendMessage = async (req, res) => {
  try {
    //validate phone and message, make sure we are getting them
    const { phone, message } = req.body;
    //initialize
    const africastalking = Africastalking({
      apiKey:
        "f5d4fb86358c4ef7fdfe18191a961b1263d7def6ca652bd706a83ad89860ad1c", //put in env
      username: "Ateller", //put in env
    });
    const result = await africastalking.SMS.send({
      to: phone,
      message: message,
    });

    console.log("result");
    console.log(result);
    res.status(200).json({
      message: "Your message was sent successfully",
      result: result.SMSMessageData.message,
    });
  } catch (error) {
    res
      .status(200)
      .json({ message: "Failed to send message", error: error.message });
  }
};

export { sendMessage };
