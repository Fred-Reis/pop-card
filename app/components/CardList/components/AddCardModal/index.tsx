import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AddCardForm } from "../AddCardForm";

interface ModalProps {
  closeModal: () => void;
}

const Header = ({ closeModal }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Adicione um novo Cartão</Text>
      <TouchableOpacity onPress={closeModal}>
        <Text style={styles.closeButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const AddCardModal = ({ closeModal }: ModalProps) => {
  return (
    <View style={styles.contentContainer}>
      <Header closeModal={closeModal} />
      <Text style={styles.title}>Insira os dados do seu novo cartão</Text>
      <AddCardForm callback={closeModal} />
    </View>
  );
};

export default AddCardModal;
