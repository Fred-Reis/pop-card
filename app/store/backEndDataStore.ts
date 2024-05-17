import { create } from "zustand";

import { CardProps } from "@/types/cardDTO";
import { UserProps } from "@/types/userDTO";

type CardListStore = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  allCardsList: CardProps[];
  setAllCardsList: (newList: CardProps[]) => void;
};

type UsersListStore = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  allUsersList: UserProps[];
  setAllUsersList: (newList: UserProps[]) => void;
};

export const useCardListStore = create<CardListStore>((set) => ({
  isLoading: true,
  setIsLoading: (state: boolean) => set({ isLoading: state }),
  allCardsList: [],
  setAllCardsList: (newList: CardProps[]) => set({ allCardsList: newList }),
}));

export const useUsersListStore = create<UsersListStore>((set) => ({
  isLoading: true,
  setIsLoading: (state: boolean) => set({ isLoading: state }),
  allUsersList: [],
  setAllUsersList: (newList: UserProps[]) => set({ allUsersList: newList }),
}));
