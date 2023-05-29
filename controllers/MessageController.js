import Africastalking from "africastalking";

const sendMessage = async (req, res) => {
  try {
    const { phone, message } = req.body;

    //initialize
    const africastalking = Africastalking({
      apiKey: "your api key",
      username: "your user name",
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
