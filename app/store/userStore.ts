import { create } from "zustand";

import { UserProps } from "@/types/userDTO";

type UserStore = {
  user: UserProps | null;
  setUser: (newUser: UserProps) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (newUser: UserProps) => set({ user: newUser }),
}));
