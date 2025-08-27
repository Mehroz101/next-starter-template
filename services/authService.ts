import axios from "@/lib/axios";

export async function fetchUsers() {
  const res = await axios.get("/api/users");
  return res.data;
}
