import React from "react";
import ReactModal from "react-modal";
import { X } from "lucide-react";
import styled from "styled-components";

ReactModal.setAppElement("#root");

const defaultStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "",
    borderRadius: "0",
    zIndex: "10"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  }
};

const CustomModal = ({
  isOpen,
  closeModal,
  children,
  backgroundColor = "#ffffff",
  padding = "2.5rem 5rem"
}) => {
  const customStyles = {
    content: {
      ...defaultStyles.content,
      backgroundColor,
      padding
    },
    overlay: defaultStyles.overlay
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
      <BtnModalClose onClick={closeModal}>
        <X />
      </BtnModalClose>
    </ReactModal>
  );
};

const BtnModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

export default CustomModal;
