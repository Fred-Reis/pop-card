import { useQuery } from "@tanstack/react-query";
import { API } from "./url";

async function getAllTransactions() {
  const { data } = await API.GET_TRANSACTIONS();

  return data;
}

export function useFetchAllTransactions() {
  return useQuery({
    queryKey: ["allTransactions"],
    queryFn: async () => getAllTransactions(),
  });
}
