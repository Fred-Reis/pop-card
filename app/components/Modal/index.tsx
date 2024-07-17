import { memo } from "react";
import { Modal, View } from "react-native";

import { styles } from "./styles";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  closeModal: () => void;
}

const Component = ({ children, visible, closeModal }: ModalProps) => {
  return (
    <View style={styles.wrapper}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={[styles.wrapper, { flex: 1 }]}>{children}</View>
      </Modal>
    </View>
  );
};

export const ModalComponent = memo(Component);
