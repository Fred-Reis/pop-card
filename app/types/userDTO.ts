import { CardProps } from "./cardDTO";

export interface UserProps {
  id: string;
  name: string;
  cpf: string;
  email: string;
  surname: string;
  account_number: string;
  password?: string;
  token?: string;
  balance: string;
  currency: string;
  cards: CardProps[];
}
