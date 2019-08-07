import http from "./http.service";
import endpoints from "@/helpers/api";

async function getUserAccess(userId) {
  const { data } = await http.get(`${endpoints.userAccess}?userId=${userId}`);
  return data;
}

export default {
  getUserAccess
};
