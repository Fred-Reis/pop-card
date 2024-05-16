import { useQuery } from "@tanstack/react-query";
import { API } from ".";

async function getAllUsers() {
  const { data } = await API.GET_USERS();

  return data;
}

export default function useFetchAllUSers() {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => getAllUsers(),
  });
}
