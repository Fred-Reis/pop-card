export interface TransacionProps {
  id: string;
  user_id: string;
  card_id: string;
  type: string;
  value: string;
  date: string;
  description: string;
  currency: string;
  status: string;
  details: Details;
}

interface Details {
  stailments: string;
  stailment_value: string;
  first_stailment_date: string;
}
