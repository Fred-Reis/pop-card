import { create } from "zustand";

import { CardListProps, CardProps } from "@/types/cardDTO";
import { UserProps } from "@/types/userDTO";

type CardListStore = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  allCardsList: CardListProps[];
  setAllCardsList: (newList: CardListProps[]) => void;
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
  setAllCardsList: (newList: CardListProps[]) => set({ allCardsList: newList }),
}));

export const useUsersListStore = create<UsersListStore>((set) => ({
  isLoading: true,
  setIsLoading: (state: boolean) => set({ isLoading: state }),
  allUsersList: [],
  setAllUsersList: (newList: UserProps[]) => set({ allUsersList: newList }),
}));
