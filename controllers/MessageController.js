import Africastalking from "africastalking";

const sendMessage = async (req, res) => {
  try {
    const { phone, message } = req.body;

    //initialize
    const africastalking = Africastalking({
      apiKey:
        "1bb7c6b2dd1f829db6e6933870486e02cd50e26a458df280f3922f51184db1a9",
      username: "panther",
    });
    const result = await africastalking.SMS.send({
      to: phone,
      message: message,
    });

    console.log("result");
    console.log(result);
    res
      .status(200)
      .json({
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
