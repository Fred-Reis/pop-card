import { create } from "zustand";

import { UserProps } from "@/types/userDTO";

type UserStore = {
  user: UserProps | null;
  setUser: (newUser: UserProps) => void;
  // isLoading: boolean;
  // setIsLoading: (state: boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (newUser: UserProps) => set({ user: newUser }),
  // isLoading: false,
  // setIsLoading: (state: boolean) => set({ isLoading: state }),
}));
