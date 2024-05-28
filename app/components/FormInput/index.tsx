import { Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import { MaskedTextInput } from "react-native-mask-text";

import { styles } from "./styles";

interface FormInputProps {
  masked?: boolean;
  mask?: string;
  name: string;
  control: any;
  [x: string]: any;
}

export const FormInput = ({
  masked,
  mask,
  control,
  name,
  ...otherProps
}: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          {masked ? (
            <MaskedTextInput
              mask={mask}
              style={styles.input}
              onChangeText={(text, rawText) => {
                onChange(rawText);
                value = { rawText };
              }}
              onBlur={onBlur}
              {...otherProps}
            />
          ) : (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              {...otherProps}
            />
          )}
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </>
      )}
    />
  );
};
