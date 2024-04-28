import axios from "axios";

export const getUsers = async () => {
  const res = await new Promise((resolve) => setTimeout(async () => {
    const result = await axios('https://randomuser.me/api/')
    resolve(result);
  }, 2000))
  return res;
}