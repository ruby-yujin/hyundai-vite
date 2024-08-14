import React from "react";
import styled from "styled-components";

import OuterLayOutWrap from "../../components/common/OuterLayout";
import InnerContent from "../../components/common/InnerContent";
import DropDown from "../../components/common/DropDown";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBottom from "../../components/common/ContentBottom";
import BtnReload from "../../components/common/BtnReload";
import Btn3wayBottom from "../../components/common/Btn3wayBottom";
import TableCommonEdit from "../../components/common/TableCommonEdit";

function MemberRegister() {
  return (
    <OuterLayOutWrap>
      <DropDown />
      <InnerContent>
        <ContentHeader colstyle="content-header-col">
          <TableFilterBox></TableFilterBox>
          <BtnReload />
        </ContentHeader>
        <ContentBottom>
          <TableCommonEdit />
          <Btn3wayBottom
            firstBtnType=""
            firstBtnBgColor="blue"
            firstBtnText="신청"
            secondBtnType=""
            secondBtnBgColor="gray"
            secondBtnText="취소"
            thirdBtnType=""
            thirdBtnBgColor="light-gray"
            thirdBtnText="출력"
          />
        </ContentBottom>
      </InnerContent>
    </OuterLayOutWrap>
  );
}

const TableFilterBox = styled.div`
  display: flex;
  gap: 20px;
`;

export default MemberRegister;
