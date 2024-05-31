import { CardProps } from "./cardDTO";

export interface UserProps {
  id: string;
  name: string;
  cpf: string;
  email: string;
  surname: string;
  main_card_number: string;
  account_number: string;
  password?: string;
  token?: string;
  balance: string;
  currency: string;
  cards: CardProps[];
}
