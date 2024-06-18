import { useState } from "react";
import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput, CusttomButton } from "@/components";

import { styles } from "./styles";

import visible from "@/assets/icons/visible.png";
import hidden from "@/assets/icons/hidden.png";

const formSchema = z
  .object({
    password: z
      .string({ required_error: "A Senha é obrigatório" })
      .length(6, "A senha precisa ter 6 dígitos"),
    confirmPassword: z
      .string({ required_error: "A Confirmação da Senha é obrigatória" })
      .length(6, "A Confirmação da Senha precisa ter 6 dígitos"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

interface CreatePasswordProps {
  password: string;
  confirmPassword: string;
}

interface CreatePasswordFormProps {
  callback: (password: string) => void;
}

export const CreatePasswordForm = ({ callback }: CreatePasswordFormProps) => {
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  /**
   *  !TODO REFACTOR
   *  PROVISIONAL SOLUTION
   */

  function togglePasswordVisibility() {
    setVisiblePassword(!visiblePassword);
  }

  function toggleConfirmPasswordVisibility() {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  }

  function onSubmit({ password }: CreatePasswordProps) {
    return callback(password);
  }

  return (
    <View style={styles.container}>
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
        width={200}
      />
      <Text style={styles.label}>Senha</Text>

      <FormInput
        control={control}
        name={"confirmPassword"}
        placeholder="senha"
        maxLength={6}
        autoCapitalize="none"
        autoCorrect={false}
        handleToggle={toggleConfirmPasswordVisibility}
        icon={visibleConfirmPassword ? hidden : visible}
        secureTextEntry={!visibleConfirmPassword}
        width={200}
      />
      <Text style={styles.label}>Confirmação da Senha</Text>

      <CusttomButton message="Confirma" action={handleSubmit(onSubmit)} />
    </View>
  );
};
