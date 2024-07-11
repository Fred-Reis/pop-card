import * as Crypto from "expo-crypto";

import { useCardListStore } from "@/store/backEndDataStore";
import { useFetchAllUsers } from "@/server/queries";

import { TransactionProps } from "@/types/transactionDTO";
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
    balance: 0,
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

export const handleCreateTransaction = (data: any): TransactionProps => {
  const [stailments, stailment_value] = data.stailments.split("x");

  const newTransaction: TransactionProps = {
    id: String(Math.random()).substring(2, 18),
    card_id: data.card_id,
    user_id: data.user_id,
    type: "1",
    value: data.value,
    date: new Date(),
    description: data.description,
    currency: "BRL",
    status: "1",
    details: {
      stailments: stailments,
      stailment_value: stailment_value,
      first_stailment_date: new Date(),
    },
  };

  return newTransaction;
};
