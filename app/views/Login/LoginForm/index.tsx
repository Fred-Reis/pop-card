import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";

import { FormInput, CusttomButton } from "@/components";

import { styles } from "./styles";

const formSchema = z.object({
  account: z
    .string({ required_error: "Campo obrigatório" })
    .length(6, "O número da conta precisa ter 6 dígitos"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .length(6, "A senha precisa ter 6 dígitos"),
});

export const LoginForm = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  const { navigate } = useNavigation();

  function onSubmit(data: any) {
    console.log(data);
    navigate("TabHome" as never);
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
