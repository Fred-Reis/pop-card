import { Text, TouchableOpacity, View } from "react-native";
import { AddFundsForm } from "../AddFundsForm";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

interface ModalProps {
  closeModal: () => void;
  item: CardProps;
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
const AddFundsModal = ({ closeModal, item }: ModalProps) => {
  return (
    <View style={styles.contentContainer}>
      <Header closeModal={closeModal} />
      <Text style={styles.title}>Insira os dados do seu novo cartão</Text>
      <AddFundsForm item={item} />
    </View>
  );
};

export default AddFundsModal;
