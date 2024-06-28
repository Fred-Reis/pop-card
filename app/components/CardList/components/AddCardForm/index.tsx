import { Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useUserStore } from "@/store";
import { useAddCard } from "@/server/queries/addCard";
import { FormInput, CusttomButton } from "@/components";
import { handleFakeAddNewCard } from "@/utils/fakeApiFunctions";

import { styles } from "./styles";
import { useToasts } from "@/utils/services/toast";

const formSchema = z
  .object({
    nickName: z
      .string({ required_error: "O apelido é obrigatório" })
      .min(6, "O apelido precisa ter no mínimo 6 letras"),
    name: z
      .string({ required_error: "O nome completo é obrigatório" })
      .min(6, "O nome completo precisa ter no mínimo 6 letras"),
    cardNumber: z
      .string({ required_error: "O número do cartão é obrigatório" })
      .length(16, "O número do cartão precisa ter 16 dígitos"),
    cvv: z
      .string({ required_error: "O cvv é obrigatório" })
      .length(3, "O cvv precisa ter 3 dígitos"),
    validate: z
      .string({ required_error: "A validade é obrigatória" })
      .length(4, "A validade precisa ter 4 dígitos"),
  })
  .refine(
    ({ validate }) => {
      const month = validate.substring(0, 2);
      const year = validate.substring(2, 4);

      const now = new Date().getTime();
      const comparedDate = new Date(
        Date.UTC(+year + 2000, +month - 1, 1, 0, 0, 0, 0)
      ).getTime();

      const isValidDate = now < comparedDate;

      return isValidDate;
    },
    {
      message: "Data de validade inválida",
      path: ["validate"],
    }
  );

interface AddCardProps {
  data: {
    name: string;
    nickName: string;
    cardNumber: string;
    cvv: string;
    validate: string;
  };
}

interface AddCardFormProps {
  callback: () => void;
}

export const AddCardForm = ({ callback }: AddCardFormProps) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  const { user } = useUserStore();

  const addCard = useAddCard();

  function onSubmit(data: AddCardProps) {
    try {
      const newCard = handleFakeAddNewCard({ data });

      addCard.mutate({
        id: user.id,
        cards: [...user.cards, newCard],
      });

      useToasts({
        type: "success",
        title: "Cartão adicionado",
        message: "Novo cartão adicionado com sucesso",
      });
    } catch (err) {
      console.log(err);

      useToasts({
        type: "error",
        title: "Cartão inválido",
        message: "Cartão inválido, tente novamente",
      });
    }

    return callback();
  }

  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name={"nickName"}
        placeholder="apelido do cartão"
        minLength={6}
        autoCapitalize="none"
        autoCorrect={false}
        width="80%"
        backgroundColor="#ddd"
      />
      <Text style={styles.label}>Apelido do cartão</Text>

      <FormInput
        control={control}
        name={"name"}
        placeholder="nome completo"
        minLength={6}
        autoCapitalize="none"
        autoCorrect={false}
        width="80%"
        backgroundColor="#ddd"
      />
      <Text style={styles.label}>Nome igual no cartão</Text>

      <FormInput
        masked
        mask="9999 9999 9999 9999"
        control={control}
        name={"cardNumber"}
        placeholder="99999 99999 99999 99999"
        maxLength={19}
        autoCapitalize="none"
        autoCorrect={false}
        width="80%"
        backgroundColor="#ddd"
      />
      <Text style={styles.label}>numero do cartão</Text>

      <View style={styles.inputsContainer}>
        <View style={{ width: "20%" }}>
          <FormInput
            masked
            mask="999"
            control={control}
            name={"cvv"}
            placeholder="999"
            maxLength={3}
            backgroundColor="#ddd"
          />
          <Text style={styles.label}>CVV</Text>
        </View>

        <View style={{ width: "25%" }}>
          <FormInput
            masked
            mask="99/99"
            control={control}
            name={"validate"}
            placeholder="99/99"
            maxLength={5}
            backgroundColor="#ddd"
          />
          <Text style={styles.label}>Validade</Text>
        </View>
      </View>

      <CusttomButton message="Confirma" action={handleSubmit(onSubmit)} />
    </View>
  );
};
