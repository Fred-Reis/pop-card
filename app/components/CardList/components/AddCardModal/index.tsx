import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AddCardForm } from "../AddCardForm";

interface ModalProps {
  closeModal: () => void;
}

const Header = ({ closeModal }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Adicionar Cartão</Text>
      <TouchableOpacity onPress={closeModal} style={styles.closeButtonWrapper}>
        <Text style={styles.closeButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export const AddCardModal = ({ closeModal }: ModalProps) => {
  return (
    <View style={styles.contentContainer}>
      <Header closeModal={closeModal} />
      <Text style={styles.title}>Insira os dados do seu novo cartão</Text>
      <AddCardForm callback={closeModal} />
    </View>
  );
};
