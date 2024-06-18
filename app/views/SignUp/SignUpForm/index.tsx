import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToasts } from "@/utils/services/toast";
import { SignUpProps } from "@/types/signupDTO";

import { FormInput, CusttomButton, CreatePasswordForm } from "@/components";

import { styles } from "./styles";

const formSchema = z.object({
  name: z
    .string({ required_error: "O Nome é obrigatório" })
    .min(3, "O Nome deve ter pelo menos 3 letras"),
  surname: z
    .string({ required_error: "O Sobrenome é obrigatório" })
    .min(3, "O Sobrenome deve ter pelo menos 3 letras"),
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("O formato do email é inválido"),
  cpf: z
    .string({ required_error: "O CPF é obrigatório" })
    .length(11, "O número do CPF precisa ter 11 dígitos"),
});

interface SignupFormProps {
  setUser: (x: any) => void;
  user: SignUpProps;
}

export const SignUpForm = ({ setUser, user }: SignupFormProps) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  function addPassword(password: string) {
    setUser((user) => ({ ...user, password }));
  }

  function onSubmit(data: SignUpProps) {
    try {
      const user = { ...data };
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
    <>
      {Object.keys(user).length ? (
        <CreatePasswordForm callback={addPassword} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.label}>Nome</Text>
          <FormInput
            control={control}
            name={"name"}
            placeholder="Seu nome"
            maxLength={14}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Sobrenome</Text>
          <FormInput
            control={control}
            name={"surname"}
            placeholder="Seu sobrenome"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Email</Text>
          <FormInput
            control={control}
            name={"email"}
            placeholder="email@example.com"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Número do CPF</Text>
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

          <View style={styles.buttonContainer}>
            <CusttomButton message="Confirma" action={handleSubmit(onSubmit)} />
          </View>
        </View>
      )}
    </>
  );
};
