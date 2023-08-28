import Jwt from "jsonwebtoken";
const verifyJWT = (req, res, next) => {
  const accessToken = req.headers.authorization;
  try {
    if (!accessToken) {
      return res.status(200).json({ message: "Access Denied!" });
    } else {
      //verify if token is valid
      const decodedToken = Jwt.verify(accessToken, process.env.JWT_SECRET);
      console.log("decodedToken");
      console.log(decodedToken);

      const tokenData = decodedToken.data;
      //time token will expire
      const tokenExpiryTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      next();

      // console.log("Token expiry " + tokenExpiryTime);
      // if (currentTime > tokenExpiryTime) {
      //   console.log("Token expired");
      //   return res.status(200).json({ message: "Access Denied! Token expired!" });
      // } else {
      //   next();
      // }
    }
  } catch (error) {
    console.log("Token expired");
    return res.status(200).json({ message: "Access Denied! Token expired!" });
  }
};

export default verifyJWT;
