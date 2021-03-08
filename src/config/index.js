import crypto from "crypto";

let date = new Date();
const DATE = date.getTime();

const API_KEY = "801ba33176620102b5413c542a89c925";
const PRIVATE_KEY = process.env.SECRET_KEY;
console.log(process.env);
console.log(PRIVATE_KEY);
const HASH = crypto
  .createHash("md5")
  .update(DATE.toString())
  .update(PRIVATE_KEY)
  .update(API_KEY)
  .digest("hex");

export { API_KEY, HASH, DATE };
