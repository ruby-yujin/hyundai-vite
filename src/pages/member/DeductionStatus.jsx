import React from "react";
import styled from "styled-components";

import OuterLayOutWrap from "../../components/common/OuterLayout";
import InnerContent from "../../components/common/InnerContent";
import TopTab from "../../components/member/TopTab";
import TableSearchInput from "../../components/common/TableSearchInput";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBottom from "../../components/common/ContentBottom";
import BtnReload from "../../components/common/BtnReload";
import TableCommon from "../../components/common/TableCommon";
import Btn2wayBottom from "../../components/common/Btn2wayBottom";
import BtnPeriod from "../../components/common/BtnPeriod";
import DatePickerStyle from "../../components/common/DatePickerStyle";

//TODO: Modal
import { useModal } from "../../context/useModal";
import CustomModal from "../../components/common/CustomModal";

function DeductionStatus() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleFirstBtnClick = () => {
    openModal();
  };

  return (
    <OuterLayOutWrap>
      <TopTab />
      <InnerContent>
        <ContentHeader className="">
          <TableFilterBox>
            <BtnPeriod />
            <DatePickerStyle />
          </TableFilterBox>
          <TableFilterBox>
            <Flexbox>
              <TableSearchInput
                filterId=""
                labelText={"총 가입단체 수 : "}
                value={0}
                onChange={() => {}}
              />
              <TableSearchInput
                filterId=""
                labelText={"현재 가입단체 수 : "}
                value={0}
                onChange={() => {}}
              />
            </Flexbox>

            <BtnReload />
          </TableFilterBox>
        </ContentHeader>
        <ContentBottom>
          <TableCommon />
          <Btn2wayBottom
            firstBtnType=""
            firstBtnBgColor="blue"
            firstBtnText="조회"
            onFirstBtnClick={handleFirstBtnClick}
            secondBtnType=""
            secondBtnBgColor="navy"
            secondBtnText="출력"
          />
        </ContentBottom>
      </InnerContent>
      <CustomModal
        isOpen={isOpen}
        closeModal={closeModal}
        backgroundColor="#fffded"
      >
        <NoApplyModal>
          <ModalIcon>
            <img src="/img/icon_notice.png" alt="공지 아이콘" />
          </ModalIcon>
          <ModalDecs>사원정보가 없습니다.</ModalDecs>
          <ModalDecs>시스템 사용 등록해주세요.</ModalDecs>
        </NoApplyModal>
      </CustomModal>
    </OuterLayOutWrap>
  );
}

const TableFilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    gap: 0;
    flex-direction: column;
  }
`;

const Flexbox = styled.div`
  display: flex;
  gap: 20px;
`;

const NoApplyModal = styled.div``;

const ModalIcon = styled.h2`
  margin: 0 auto 15%;
  text-align: center;
  > img {
    display: inline-block;
    max-width: 200px;
  }
`;

const ModalDecs = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 2%;
`;
export default DeductionStatus;
