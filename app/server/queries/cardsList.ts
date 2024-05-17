import { useQuery } from "@tanstack/react-query";
import { API } from "./url";

async function getAllCards() {
  const { data } = await API.GET_CARDS();

  return data;
}

export function useFetchAllCards() {
  return useQuery({
    queryKey: ["allCards"],
    queryFn: async () => getAllCards(),
  });
}
