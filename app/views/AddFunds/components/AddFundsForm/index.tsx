import { useState } from "react";
import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput, CusttomButton } from "@/components";
import { useEditUser } from "@/server/queries/editUser";
import { useToasts } from "@/utils/services/toast";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";
import { useUserStore } from "@/store";
import { useNavigation } from "@react-navigation/native";

const formSchema = (item: CardProps) =>
  z
    .object({
      value: z.string({ required_error: "O Valor é obrigatório" }),
      cvv: z
        .string({ required_error: "O CVV é obrigatório" })
        .length(3, "O CVV precisa ter 3 dígitos"),
    })
    .refine(({ cvv }) => cvv === item.cvv, {
      message: "O CVV não confere",
      path: ["cvv"],
    });

interface AddFundsFormProps {
  item: CardProps;
  closeModal: () => void;
}

export const AddFundsForm = ({ item, closeModal }: AddFundsFormProps) => {
  const [instalments, setInstalments] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const { control, handleSubmit, watch } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema(item)),
  });

  const editUser = useEditUser();
  const { user } = useUserStore();
  const { navigate } = useNavigation();

  function onSubmit(data: any) {
    if (!value) {
      setError("Favor selecionar as parcelas");
      return;
    }

    const newBalance = user.balance + data.value / 100;

    try {
      // !TODO IMPLEMENTAR NOVAS TRANSAÇOES

      editUser.mutate({
        id: user.id,
        key: "balance",
        value: newBalance,
      });

      useToasts({
        type: "success",
        title: "Saldo adicionado",
        message: "O seu novo saldo foi adicionado com sucesso",
      });

      closeModal();
      setTimeout(() => navigate("Home" as never), 500);
    } catch (error) {
      useToasts({
        type: "error",
        title: "Ops... Algo saiu errado!!",
        message: error.message,
      });
    }
  }

  function getInstailments(value) {
    let instailments = [];
    for (let i = 1; i <= 10; i++) {
      const instailmentValue = value / i;
      const taxesValue = ((value / 100) * i * 3) / i;
      instailments.push({
        label: `${
          i > 1 ? i + " parcelas" : i + " parcela"
        } de ${new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(instailmentValue + taxesValue)}`,
        value: i,
      });
    }
    return instailments;
  }

  function handleSetInstalment(value) {
    setValue(value);
    setError(null);
  }

  const Label = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.dropDownLabel, isFocus && { color: "gray" }]}>
          Parcelas
        </Text>
      );
    }
    return null;
  };

  watch((value) => {
    setInstalments(getInstailments(value?.value / 100));
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View
          style={{
            width: "50%",
            alignItems: "center",
          }}
        >
          <FormInput
            masked
            type="currency"
            options={{
              prefix: "R$",
              decimalSeparator: ",",
              groupSeparator: ".",
              precision: 2,
            }}
            control={control}
            name={"value"}
            backgroundColor="#ddd"
          />
          <Text style={styles.label}>Valor a ser adicionado</Text>
        </View>
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
      </View>

      <View style={styles.dropDownContainer}>
        <Label />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "gray" }]}
          inputSearchStyle={styles.inputSearchStyle}
          data={instalments}
          showsVerticalScrollIndicator={false}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Selecione as parcelas" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            handleSetInstalment(item.value);
            setIsFocus(false);
          }}
        />
        {error && <Text style={styles.errorMessage}>{error}</Text>}
      </View>

      <CusttomButton message="Confirma" action={handleSubmit(onSubmit)} />
    </View>
  );
};
