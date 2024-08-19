import React, { useState } from "react";
import styled from "styled-components";

import OuterLayOutWrap from "../../components/common/OuterLayout";
import InnerContent from "../../components/common/InnerContent";
import TableFilter from "../../components/common/TableSearchInput";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBottom from "../../components/common/ContentBottom";

import { COMMON_TABLE_TH, COMMON_TABLE_DATA } from "../../constants/constants";
import { RefreshCcw, Circle, CircleCheck } from "lucide-react";
import Table from "react-bootstrap/Table";
import Checkbox from "../../components/common/Checkbox";

function SamplePage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(COMMON_TABLE_DATA.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index, checked) => {
    setSelectedRows((prev) =>
      checked ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };

  // 페이지 상단 타이틀
  const TabTitle = (title, isActive) => (
    <>
      {isActive ? (
        <CircleCheck size={18} color="#132053" />
      ) : (
        <Circle size={18} color="#7c7c7c" />
      )}
      <span style={{ color: isActive ? "#132053" : "#000" }}>{title}</span>
    </>
  );

  return (
    <OuterLayOutWrap>
      <TapWrap>
        <li>{TabTitle("전체", true)}</li>
        <li>{TabTitle("현재 가입 단체", false)}</li>
      </TapWrap>
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
          <BtnReloadWrap>
            <RefreshCcw color="#ffffff" size={14} />
            새로고침
          </BtnReloadWrap>
        </ContentHeader>
        <ContentBottom>
          <TableCommonWrap>
            <Table>
              <thead>
                <tr>
                  <th>
                    <Checkbox
                      onChange={handleSelectAll}
                      checked={selectedRows.length === COMMON_TABLE_DATA.length}
                    />
                  </th>
                  {COMMON_TABLE_TH.map((item, index) => (
                    <th key={index}>{item.th}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMMON_TABLE_DATA.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <Checkbox
                        checked={selectedRows.includes(rowIndex)}
                        onChange={(isChecked) =>
                          handleSelectRow(rowIndex, isChecked)
                        }
                      />
                    </td>
                    {COMMON_TABLE_TH.map((item, cellIndex) => (
                      <td key={cellIndex}>{row[item.th.toLowerCase()]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableCommonWrap>
          <Btn2wayBottomWrap>
            <Btn type="button" className="gray" onClick={() => {}}>
              탈퇴
            </Btn>
            <Btn type="button" className="navy" onClick={() => {}}>
              조회
            </Btn>
          </Btn2wayBottomWrap>
        </ContentBottom>
      </InnerContent>
    </OuterLayOutWrap>
  );
}

const TapWrap = styled.ul`
  padding: 2rem 4rem;
  display: flex;
  gap: 20px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: #000;
      font-size: 1.8rem;
      margin-left: 5px;
      font-weight: 500;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 1.5rem 2rem;
    li {
      span {
        font-size: 1.4rem;
      }
    }
  }
`;

const TableFilterBox = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

const BtnReloadWrap = styled.button`
  width: 84px;
  height: 24px;
  color: #fff;
  background: #1f3e74;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    margin-left: auto;
    width: 68px;
    font-size: 1rem;
  }
`;

const TableCommonWrap = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #e2e2e2;
    thead tr th {
      font-size: 1.4rem;
      background: #f1f6fc;
      color: #666;
      height: 28px;
      border-left: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      padding: 5px;
      &:first-child {
        border-left: none;
      }
    }
    tbody tr td {
      text-align: center;
      height: 28px;
      font-size: 1.4rem;
      border-left: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      padding: 5px;
      &.red {
        color: red;
      }
      &:first-child {
        border-left: none;
      }
    }
    tr:nth-child(even) td {
      background: #f0f0f0;
    }

    @media screen and (max-width: 1024px) {
      table-layout: fixed;
      thead tr th {
        font-size: 1.2rem;
      }
      tbody tr td {
        font-size: 1.2rem;
        padding: 0 5px;
      }
    }
  }
`;

const Btn = styled.button`
  width: 50px;
  height: 24px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &.gray {
    background: #666;
  }
  &.navy {
    background: #1f3e74;
  }
  &.blue {
    background: #295095;
  }
  &.light-gray {
    background: #939598;
  }

  @media screen and (max-width: 1024px) {
    width: 46px;
    font-size: 1rem;
  }
`;

const Btn2wayBottomWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

const Btn2Way = styled.button`
  width: 50px;
  height: 24px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &.gray {
    background: #666;
  }
  &.navy {
    background: #1f3e74;
  }
  &.blue {
    background: #295095;
  }

  @media screen and (max-width: 1024px) {
    width: 46px;
    font-size: 1rem;
  }
`;

export default SamplePage;
