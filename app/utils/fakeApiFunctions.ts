import * as Crypto from "expo-crypto";

import { useUsersListStore } from "@/store/backEndDataStore";
import { SignUpProps } from "@/types/signupDTO";
import { UserProps } from "@/types/userDTO";

interface LoginProps {
  account: string;
  password: string;
}

export function handleFakeLogin({ account, password }: LoginProps) {
  const { allUsersList } = useUsersListStore();

  const user = allUsersList.find((user) => user.account_number === account);

  if (user.password !== password) {
    console.log("ERRR");

    throw Error("Email ou senha inválidos");
  }

  return user;
}

export function handleFakeMapUserCards(
  userCardsList: any[],
  allCardsList: any[]
) {
  const cards = userCardsList.map((userCard) => {
    const card = allCardsList.find((card) => card?.id === userCard?.type);
    return { ...userCard, color: card.color, name: card.name };
  });

  return cards;
}

export function handleFakeCreateUser({
  cpf,
  name,
  email,
  surname,
  password,
}: SignUpProps) {
  const newUser: UserProps = {
    id: String(Math.random()).substring(2, 18),
    name: name.trim(),
    token: Crypto.randomUUID(),
    balance: "0",
    currency: "BRL",
    cards: [],
    main_card_number: String(Math.random()).substring(2, 18),
    surname: surname.trim(),
    cpf,
    email,
    password,
    account_number: String(Math.random()).substring(2, 8),
  };

  return newUser;
}
