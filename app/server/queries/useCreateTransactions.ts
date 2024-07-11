import { useMutation } from "@tanstack/react-query";

import { API } from "./url";

import { TransactionProps } from "@/types/transactionDTO";
import { useTransactionsStore } from "@/store";

export async function createTransactions(transaction: TransactionProps) {
  const { data } = await API.CREATE_TRANSACTIONS(transaction);

  return data;
}

export const useCreateTransactions = () => {
  const { setTransactions, transactions } = useTransactionsStore.getState();

  return useMutation({
    mutationFn: createTransactions,
    onSuccess: (data) => {
      setTransactions([...transactions, data]);
    },
  });
};
