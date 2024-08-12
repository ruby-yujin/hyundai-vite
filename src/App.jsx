import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./CustomRouter";
import { NavProvider } from "./context/useNav";

// 전체모달
import { useModal } from "./context/useModal";
import CustomModal from "./components/common/CustomModal";
import ModalNotice from "./components/common/ModalNotice";

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <NavProvider>
      <div className="App">
        <BtnModalTest onClick={openModal}>모달버튼</BtnModalTest>
        <CustomModal isOpen={isOpen} closeModal={closeModal} padding="10px">
          <ModalNotice />
        </CustomModal>
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </div>
    </NavProvider>
  );
};

// TODO 임시 모달버튼
const BtnModalTest = styled.button`
  font-size: 18px;
  color: #000;
  position: fixed;
  top: 14px;
  right: 10px;
  z-index: 10;
  background: yellow;
`;

export default App;
