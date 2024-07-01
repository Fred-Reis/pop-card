import { Button, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { CusttomButton } from "@/components";

interface ModalProps {
  closeModal: () => void;
  submitAction: () => void;
}

const Header = ({ closeModal }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Remover Cartão</Text>
      <TouchableOpacity onPress={closeModal} style={styles.closeButtonWrapper}>
        <Text style={styles.closeButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const ConfirmModal = ({ submitAction, closeModal }: ModalProps) => {
  return (
    <View style={styles.contentContainer}>
      <Header closeModal={closeModal} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Você tem certeza que deseja remover este cartão?
        </Text>
        <Text style={styles.title}>
          Caso você opte por remover o cartão de forma permanente, você perderá
          todo historico das suas transações.
        </Text>
        <Text style={styles.title}>Essa operação não pode ser desfeita.</Text>
      </View>

      <CusttomButton message="Confirmar" action={submitAction} />

      <CusttomButton
        type="noBorder"
        fontColor="#007AFF"
        fontSize={18}
        message="Cancelar"
        action={closeModal}
      />
    </View>
  );
};

export default ConfirmModal;
