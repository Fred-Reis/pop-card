import { useQuery } from "@tanstack/react-query";
import { API } from "./url";

async function getAllUsers() {
  const { data } = await API.GET_USERS();

  return data;
}

export function useFetchAllUSers() {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => getAllUsers(),
  });
}
