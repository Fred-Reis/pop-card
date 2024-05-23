import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";

import { useToasts } from "@/utils/services/toast";
import { FormInput, CusttomButton } from "@/components";
import { useUsersListStore } from "@/store/backEndDataStore";

import { styles } from "./styles";
// import { handleFakeLogin } from "@/utils/fakeApiFunctions";

const formSchema = z.object({
  account: z
    .string({ required_error: "Campo obrigatório" })
    .length(6, "O número da conta precisa ter 6 dígitos"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .length(6, "A senha precisa ter 6 dígitos"),
});

interface LoginProps {
  account: string;
  password: string;
}

export const LoginForm = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  const { navigate } = useNavigation();

  /**
   *  PROVISIONAL SOLUTION
   */

  const { allUsersList } = useUsersListStore();

  function handleFakeLogin({ account, password }: LoginProps) {
    const user = allUsersList.find((user) => user.account_number === account);

    if (!user || user?.password !== password) {
      throw Error("Email ou senha inválidos");
    }

    return user;
  }

  function onSubmit(data: any) {
    try {
      const result = handleFakeLogin(data);

      useToasts({
        type: "success",
        title: "Login",
        message: "Login efetuado com sucesso",
      });
      // navigate("TabHome" as never);
      console.log("result", result);
    } catch (error) {
      useToasts({
        type: "error",
        title: "Ops... Algo saiu errado!!",
        message: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name={"account"}
        placeholder="account"
        maxLength={6}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Número da conta</Text>

      <FormInput
        control={control}
        name={"password"}
        placeholder="password "
        maxLength={6}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.label}>Senha</Text>

      <CusttomButton message="Login" action={handleSubmit(onSubmit)} />
    </View>
  );
};
