import React, { forwardRef } from "react";

import {
  ColorValue,
  DimensionValue,
  Image,
  ImageSourcePropType,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TextInputProps,
  View,
} from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";
import { MaskedTextInput } from "react-native-mask-text";

import { styles } from "./styles";

interface InputProps extends TextInputProps {
  masked?: boolean;
  mask?: string;
  name: string;
  icon?: ImageSourcePropType;
  control: Control<FieldValues>;
  width?: DimensionValue;
  backgroundColor?: ColorValue;
  handleToggle?: () => void;
  [x: string]: any;
}

export const FormInput = forwardRef<TextInput, InputProps>(
  (
    {
      masked,
      mask,
      name,
      icon,
      control,
      width,
      backgroundColor,
      handleToggle,
      ...otherProps
    },
    ref
  ) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[
                styles.inputContainer,
                {
                  width: width || "100%",
                  backgroundColor: backgroundColor || "#fff",
                },
              ]}
            >
              {masked ? (
                <MaskedTextInput
                  ref={ref}
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
                  ref={ref}
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
  }
);
