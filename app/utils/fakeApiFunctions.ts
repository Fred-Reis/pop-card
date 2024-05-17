import { useFetchAllCards } from "@/server/queries";
import { useCardListStore } from "@/store/backEndDataStore";

export function handleGetCards() {
  const { data, isLoading } = useFetchAllCards();

  const { setAllCardsList, setIsLoading } = useCardListStore();

  setIsLoading(isLoading);
  setAllCardsList(data);
}
