import { API } from "./url";

import { UserProps } from "@/types/userDTO";

export async function createUser(_user: UserProps) {
  const { data } = await API.CREATE_USER(_user);

  return data;
}
