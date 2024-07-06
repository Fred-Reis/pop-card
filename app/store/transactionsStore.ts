import { create } from "zustand";

import { TransactionProps } from "@/types/transactionDTO";

type TransactionsStoreProps = {
  trasactions: TransactionProps[];
  setTransactions: (newTransactions: TransactionProps[]) => void;
};

export const useTransactionsStore = create<TransactionsStoreProps>((set) => ({
  trasactions: [],
  setTransactions: (newTransactions: TransactionProps[]) =>
    set({ trasactions: newTransactions }),
}));
