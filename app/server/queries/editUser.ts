import { useMutation } from "@tanstack/react-query";

import { API } from "./url";

import { useUserStore } from "@/store";
import { string } from "zod";

export async function editUser(obj: any) {
  console.log({ obj });

  const { data } = await API.EDIT_USER(obj.id, {
    [obj.key]: obj.value,
  });
  console.log({ data });

  return data;
}

export const useEditUser = () => {
  const { setUser } = useUserStore.getState();

  return useMutation({
    mutationFn: editUser,
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
