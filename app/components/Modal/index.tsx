import { memo } from "react";

import { Modal, View } from "react-native";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  closeModal: () => void;
}

const Component = ({ children, visible, closeModal }: ModalProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </View>
      </Modal>
    </View>
  );
};

export const ModalComponent = memo(Component);
