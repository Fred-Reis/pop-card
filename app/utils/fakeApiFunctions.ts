import { useUsersListStore } from "@/store/backEndDataStore";

interface LoginProps {
  account: string;
  password: string;
}
export function handleFakeLogin({ account, password }: LoginProps) {
  console.log("func", account, password);
  const { allUsersList } = useUsersListStore();

  const user = allUsersList.find((user) => user.account_number === account);

  if (user.password !== password) {
    console.log("ERRR");

    throw Error("Email ou senha inválidos");
  }

  return user;
}
