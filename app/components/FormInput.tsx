import { StyleSheet, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export const FormInput = ({ control, name, ...otherProps }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...otherProps}
          />
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginBottom: 3,
    width: 200,
    textAlign: "center",
    color: "#3e3e3e",
  },

  errorMessage: {
    marginBottom: 10,
    color: "#ec3030",
  },
});
