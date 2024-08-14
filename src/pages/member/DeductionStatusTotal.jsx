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

function DeductionStatusTotal() {
  return (
    <OuterLayOutWrap>
      <TopTab />
      <InnerContent>
        <ContentHeader>
          <TableFilterBox className="">
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
            secondBtnType=""
            secondBtnBgColor="navy"
            secondBtnText="출력"
          />
        </ContentBottom>
      </InnerContent>
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

export default DeductionStatusTotal;
