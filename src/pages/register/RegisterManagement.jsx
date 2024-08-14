import React from "react";
import styled from "styled-components";

import OuterLayOutWrap from "../../components/common/OuterLayout";
import InnerContent from "../../components/common/InnerContent";
import DropDown from "../../components/common/DropDown";
import TableFilter from "../../components/common/TableSearchInput";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBottom from "../../components/common/ContentBottom";
import TableCommon from "../../components/common/TableCommon";
import Btn2wayBottom from "../../components/common/Btn2wayBottom";

function RegisterManagement() {
  return (
    <OuterLayOutWrap>
      <DropDown />
      <InnerContent>
        <ContentHeader>
          <TableFilterBox>
            <TableFilter
              filterId=""
              labelText={"총 가입단체 수 : "}
              value={0}
              onChange={() => {}}
            />
            <TableFilter
              filterId=""
              labelText={"현재 가입단체 수 : "}
              value={0}
              onChange={() => {}}
            />
          </TableFilterBox>
        </ContentHeader>
        <ContentBottom>
          <TableCommon />
          <Btn2wayBottom
            firstBtnType=""
            firstBtnBgColor="blue"
            firstBtnText="승인"
            secondBtnType=""
            secondBtnBgColor="gray"
            secondBtnText="거부"
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
export default RegisterManagement;
