import { create } from "zustand";

import { TransactionProps } from "@/types/transactionDTO";

type TransactionsStoreProps = {
  transactions: TransactionProps[];
  setTransactions: (newTransactions: TransactionProps[]) => void;
};

export const useTransactionsStore = create<TransactionsStoreProps>((set) => ({
  transactions: [],
  setTransactions: (newTransactions: TransactionProps[]) =>
    set({ transactions: newTransactions }),
}));
