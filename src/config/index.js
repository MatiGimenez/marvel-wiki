import crypto from "crypto";

let date = new Date();
const DATE = date.getTime();

const API_KEY = "801ba33176620102b5413c542a89c925";
const PRIVATE_KEY = "9dfaddc316d2680fad4266d79cee2fb81ef25d29";
const HASH = crypto
  .createHash("md5")
  .update(DATE.toString())
  .update(PRIVATE_KEY)
  .update(API_KEY)
  .digest("hex");

export { API_KEY, HASH, DATE };
