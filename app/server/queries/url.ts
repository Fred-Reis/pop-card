import api from "@/server/api/api";
import { UserProps } from "@/types/userDTO";

export const URLS = {
  CARDS: "/cards",
  USERS: "/users",
  USER: "/user/:id",
};

const getCards = () => {
  return api.get(URLS.CARDS);
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

export const API = {
  GET_CARDS: getCards,
  GET_USERS: getUsers,
  GET_USER: getUser,
  CREATE_USER: createUser,
};
