export interface TransactionProps {
  id: string;
  user_id: string;
  card_id: string;
  type: string;
  value: string;
  date: Date;
  description: string;
  currency: string;
  status: string;
  details: Details;
}

interface Details {
  stailments: string;
  stailment_value: number;
  first_stailment_date: Date;
}
