import { useMutation } from "@tanstack/react-query";

import { API } from "./url";

import { useUserStore } from "@/store";

export async function addCard(obj: any) {
  const { data } = await API.EDIT_USER(obj.id, { cards: obj.cards });

  return data;
}

export const useEditCards = () => {
  const { setUser } = useUserStore.getState();

  return useMutation({
    mutationFn: addCard,
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
