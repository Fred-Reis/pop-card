import { useUsersListStore } from "@/store/backEndDataStore";

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
