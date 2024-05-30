import { useState } from "react";
import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToasts } from "@/utils/services/toast";
import { saveEncryptedValue } from "@/utils/storage";
import { useUsersListStore, useUserStore } from "@/store";

import { FormInput, CusttomButton } from "@/components";

import { styles } from "./styles";

import visible from "@/assets/icons/visible.png";
import hidden from "@/assets/icons/hidden.png";

const formSchema = z.object({
  cpf: z
    .string({ required_error: "Campo obrigatório" })
    .length(11, "O número do CPF precisa ter 11 dígitos"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .length(6, "A senha precisa ter 6 dígitos"),
});

interface LoginProps {
  cpf: string;
  password: string;
}

export const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  /**
   *  PROVISIONAL SOLUTION
   */

  const { setUser } = useUserStore();
  const { allUsersList } = useUsersListStore();

  function handleFakeLogin({ cpf, password }: LoginProps) {
    const user = allUsersList.find((user) => user.cpf === cpf);

    if (!user || user?.password !== password) {
      throw Error("CPF ou senha inválidos");
    }

    return user;
  }

  function togglePasswordVisibility() {
    setVisiblePassword(!visiblePassword);
  }

  function onSubmit(data: any) {
    try {
      const user = { ...handleFakeLogin(data) };

      useToasts({
        type: "success",
        title: "Login",
        message: "Login efetuado com sucesso",
      });

      saveEncryptedValue("user_token", user.token);

      delete user["token"];
      delete user["password"];

      setUser(user);
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
        masked
        mask="999.999.999-99"
        control={control}
        name={"cpf"}
        placeholder="999.999.999-99"
        maxLength={14}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Número do CPF</Text>

      <FormInput
        control={control}
        name={"password"}
        placeholder="senha"
        maxLength={6}
        autoCapitalize="none"
        autoCorrect={false}
        handleToggle={togglePasswordVisibility}
        icon={visiblePassword ? hidden : visible}
        secureTextEntry={!visiblePassword}
      />
      <Text style={styles.label}>Senha</Text>

      <CusttomButton message="Login" action={handleSubmit(onSubmit)} />
    </View>
  );
};
