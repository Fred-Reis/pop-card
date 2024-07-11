import { useMutation } from "@tanstack/react-query";

import { API } from "./url";

import { useUserStore } from "@/store";

export async function editUser(obj: any) {
  const { data } = await API.EDIT_USER(obj.id, {
    [obj.key]: obj.value,
  });

  return data;
}

export const useEditUser = () => {
  const { setUser } = useUserStore.getState();

  return useMutation({
    mutationFn: editUser,
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
