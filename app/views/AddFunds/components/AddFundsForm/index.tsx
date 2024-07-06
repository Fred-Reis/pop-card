import { useState } from "react";
import { Text, View } from "react-native";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToasts } from "@/utils/services/toast";

import { FormInput, CusttomButton } from "@/components";

import { styles } from "./styles";

const formSchema = z.object({
  value: z.string({ required_error: "O Valor é obrigatório" }),
  cvv: z
    .string({ required_error: "O CVV é obrigatório" })
    .length(3, "O CVV precisa ter 3 dígitos"),
});

interface LoginProps {
  cpf: string;
  password: string;
}

export const AddFundsForm = ({ item }) => {
  const [instalments, setInstalments] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  const { control, handleSubmit, watch } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: any) {
    try {
      useToasts({
        type: "success",
        title: "Login",
        message: "Login efetuado com sucesso",
      });
    } catch (error) {
      useToasts({
        type: "error",
        title: "Ops... Algo saiu errado!!",
        message: error.message,
      });
    }
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
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <CusttomButton message="Confirma" action={handleSubmit(onSubmit)} />
    </View>
  );
};
