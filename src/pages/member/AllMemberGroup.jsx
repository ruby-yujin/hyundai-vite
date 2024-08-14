import React from "react";
import styled from "styled-components";

import OuterLayOutWrap from "../../components/common/OuterLayout";
import InnerContent from "../../components/common/InnerContent";
import TopTab from "../../components/member/TopTab";
import TableFilter from "../../components/common/TableSearchInput";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBottom from "../../components/common/ContentBottom";
import BtnReload from "../../components/common/BtnReload";
import TableCommon from "../../components/common/TableCommon";
import Btn2wayBottom from "../../components/common/Btn2wayBottom";

function AllMemberGroup() {
  return (
    <OuterLayOutWrap>
      <TopTab />
      <InnerContent>
        <ContentHeader colstyle="content-header-col">
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
          <BtnReload />
        </ContentHeader>
        <ContentBottom>
          <TableCommon />
          <Btn2wayBottom
            firstBtnType=""
            firstBtnBgColor="gray"
            firstBtnText="탈퇴"
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
  gap: 20px;
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

export default AllMemberGroup;
