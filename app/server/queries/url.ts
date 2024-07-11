import api from "@/server/api/api";
import { UserProps } from "@/types/userDTO";
import { TransactionProps } from "@/types/transactionDTO";

export const URLS = {
  CARDS: "/cards",
  USERS: "/users",
  USER: "/users/:id",
  TRANSACTIONS: "/transactions",
  TRANSACTION: "/transactions/:id",
};

const getCards = () => {
  return api.get(URLS.CARDS);
};

const getTransactions = () => {
  return api.get(URLS.TRANSACTIONS);
};

const createTransactions = (_transaction: TransactionProps) => {
  return api.post(URLS.TRANSACTIONS, _transaction);
};

const getUsers = () => {
  return api.get(URLS.USERS);
};

const createUser = (_user: UserProps) => {
  return api.post(URLS.USERS, _user);
};

const getUser = (_id: string) => {
  return api.get(URLS.USER.replace(":id", _id));
};

const editUser = (_id: string, data: any) => {
  return api.patch(URLS.USER.replace(":id", _id), data);
};

export const API = {
  GET_CARDS: getCards,
  GET_TRANSACTIONS: getTransactions,
  CREATE_TRANSACTIONS: createTransactions,
  GET_USERS: getUsers,
  GET_USER: getUser,
  CREATE_USER: createUser,
  EDIT_USER: editUser,
};
