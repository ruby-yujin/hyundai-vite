import React, { useState } from "react";
import styled from "styled-components";
import { COMMON_TABLE_TH, COMMON_TABLE_DATA } from "../../constants/constants";

import Table from "react-bootstrap/Table";
import Checkbox from "./Checkbox";

function TableCommon() {
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

  return (
    <TableCommonWrap>
      <Table>
        <colgroup>
          <col width="9%" />
          <col width="14%" />
          <col width="18%" />
          <col width="15%" />
          <col width="15%" />
          <col width="14%" />
          <col width="15%" />
        </colgroup>
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
                  onChange={(isChecked) => handleSelectRow(rowIndex, isChecked)}
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
  );
}

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
export default TableCommon;
