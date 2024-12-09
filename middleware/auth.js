import "dotenv/config";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authorise = (req, res, next) => {
  if (!req.headers.authorisation) {
    return res
      .status(401)
      .json({ message: "This route requires an authentication token" });
  }

  const token = req.headers.authorisation.split(" ")[1];

  console.log("🦋req.headers = ");
  console.log(req.headers);

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "The authentication token is invalid" + err });
    }

    // Attach the decoded JWT on the request, so that it can be used on the /profile endpoint
    req.token = decodedToken;

    // Move on to the next request
    next();
  });
};

export default authorise;
