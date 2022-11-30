import { SECRET } from "./environments";

export const auth = {
  secret: String(SECRET),
  expires: "24h",
};
