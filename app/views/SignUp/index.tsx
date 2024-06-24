import { useState } from "react";
import { Button, Text, View } from "react-native";

import { useMutation } from "@tanstack/react-query";
import { MaskedText } from "react-native-mask-text";

import { handleFakeCreateUser } from "@/utils/fakeApiFunctions";
import { createUser } from "@/server/queries/createUser";
import { saveEncryptedValue } from "@/utils/storage";
import { useToasts } from "@/utils/services/toast";
import { SignUpProps } from "@/types/signupDTO";
import { useUserStore } from "@/store";

import { CusttomButton } from "@/components";
import { SignUpForm } from "./SignUpForm";

import { styles } from "./styles";

export const SignUp = () => {
  const [user, setNewUser] = useState({} as SignUpProps);
  const { setUser } = useUserStore();
  const mutation = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUser,
  });

  const hasUser = Object.keys(user).length;

  const subtitle = hasUser
    ? "Agora, Crie sua senha"
    : "Vamos lá, é hora de criar a sua conta!";

  function handleSignUp() {
    const newUser = handleFakeCreateUser(user);
    mutation.mutate(newUser);

    useToasts({
      type: "success",
      title: "Cadastro",
      message: "Cadastro efetuado com sucesso",
    });

    saveEncryptedValue("user_token", newUser.token);

    delete newUser["token"];
    delete newUser["password"];

    setUser(newUser);
  }

  return (
    <View style={styles.container}>
      {!user.password ? (
        <>
          <Text style={styles.title}>{subtitle}</Text>
          {!hasUser && (
            <Text style={styles.subTitle}>
              Queremos te conhecer um pouco mais
            </Text>
          )}

          <SignUpForm setUser={setNewUser} user={user} />
        </>
      ) : (
        <>
          <Text style={styles.title}>Confirme seus dados abaixo</Text>

          <Text style={[styles.subTitle, { textAlign: "center" }]}>
            Se estiver tudo certo com os dados, clique para confirmar
          </Text>

          {Object.keys(user)
            .filter((key) => key !== "password")
            .map((key) =>
              key === "cpf" ? (
                <View key={key} style={styles.dataWrapper}>
                  <Text style={styles.dataMessage}>{key}: </Text>
                  <MaskedText style={styles.dataMessage} mask="999.999.999-99">
                    {user[key]}
                  </MaskedText>
                </View>
              ) : (
                <View key={key} style={styles.dataWrapper}>
                  <Text style={styles.dataMessage}>{key}: </Text>
                  <Text
                    style={[
                      styles.dataMessage,
                      key === "email" && { textTransform: "none" },
                    ]}
                  >
                    {user[key]}
                  </Text>
                </View>
              )
            )}

          <View style={styles.buttonContainer}>
            <CusttomButton message="Cadastrar" action={handleSignUp} />
          </View>

          <Text style={[styles.subTitle, { textAlign: "center" }]}>
            Se algo estiver errado, clique para redefinir
          </Text>

          <Button
            title="Redefinir"
            onPress={() => setNewUser({} as SignUpProps)}
          />
        </>
      )}
    </View>
  );
};
