export interface CardProps {
  id?: string;
  name: string;
  number: string;
  color: string;
  nick_name: string;
  cvv: string;
  validate: string;
  type: string;
}

export interface CardListProps {
  id: string;
  type: string;
  pre: string;
  name: string;
  color: string;
}
