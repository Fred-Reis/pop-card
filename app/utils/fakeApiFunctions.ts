import * as Crypto from "expo-crypto";

import { useCardListStore, useUsersListStore } from "@/store/backEndDataStore";
import { useFetchAllUsers } from "@/server/queries";
import { SignUpProps } from "@/types/signupDTO";
import { UserProps } from "@/types/userDTO";
import { CardProps } from "@/types/cardDTO";

interface LoginProps {
  cpf: string;
  password: string;
}

export interface CreateCardProps {
  data: {
    name: string;
    cardNumber: string;
    nickName: string;
    cvv: string;
    validate: string;
  };
  // userId: string;
}

export const handleFakeLogin = ({ cpf, password }: LoginProps) => {
  const { data } = useFetchAllUsers();
  // const { allUsersList } = useUsersListStore();

  const user = data.find((user) => user.cpf === cpf);

  if (!user || user?.password !== password) {
    throw Error("CPF ou senha inválidos");
  }

  return user;

  // const user = allUsersList.find((user) => user.account_number === account);

  // if (user.password !== password) {

  //   throw Error("Email ou senha inválidos");
  // }

  // return user;
};

export function handleFakeMapUserCards(
  userCardsList: any[],
  allCardsList: any[]
) {
  const cards = userCardsList.map((userCard) => {
    const card = allCardsList.find((card) => card?.type === userCard?.type);

    return {
      ...userCard,
    };
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

export const handleFakeAddNewCard = ({ data }: CreateCardProps) => {
  const { allCardsList } = useCardListStore.getState();

  const refCard = allCardsList.find(
    (card) => card.pre === data.cardNumber.substring(0, 4)
  );

  const newCard: CardProps = {
    id: String(Math.random()).substring(2, 18),
    nick_name: data.nickName,
    name: data.name,
    cvv: data.cvv,
    validate: `${data.validate.substring(0, 2)}/${data.validate.substring(2)}`,
    number: data.cardNumber,
    type: refCard?.type || null,
    color: refCard?.color || null,
  };

  return newCard;
};
