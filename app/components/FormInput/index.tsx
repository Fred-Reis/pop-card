import {
  Image,
  ImageSourcePropType,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";
import { MaskedTextInput } from "react-native-mask-text";

import { styles } from "./styles";

interface FormInputProps {
  masked?: boolean;
  mask?: string;
  name: string;
  icon?: ImageSourcePropType;
  control: Control<FieldValues>;
  handleToggle?: () => void;
  [x: string]: any;
}

export const FormInput = ({
  masked,
  mask,
  name,
  icon,
  control,
  handleToggle,
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
          <View style={styles.inputContainer}>
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
            {icon && (
              <TouchableWithoutFeedback onPress={handleToggle}>
                <Image source={icon} style={styles.icon} />
              </TouchableWithoutFeedback>
            )}
          </View>
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </>
      )}
    />
  );
};
