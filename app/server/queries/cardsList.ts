import { useQuery } from "@tanstack/react-query";
import { API } from ".";

async function getAllCards() {
  const { data } = await API.GET_CARDS();

  return data;
}

export default function useFetchAllCards() {
  return useQuery({
    queryKey: ["allCards"],
    queryFn: async () => getAllCards(),
  });
}
