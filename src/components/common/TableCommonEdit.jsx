import React, { useState } from "react";
import styled from "styled-components";
import {
  COMMON_EDIT_TABLE_TH,
  COMMON_EDIT_TABLE_DATA
} from "../../constants/constants";

import Table from "react-bootstrap/Table";
import Checkbox from "./Checkbox";

function TableCommonEdit() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [tableData, setTableData] = useState(COMMON_EDIT_TABLE_DATA);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(COMMON_EDIT_TABLE_DATA.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index, checked) => {
    setSelectedRows((prev) =>
      checked ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };

  const handleInputChange = (rowIndex, field, value) => {
    const newData = [...tableData];
    newData[rowIndex][field] = value;
    setTableData(newData);
  };

  return (
    <TableCommonEditWrap>
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
                checked={selectedRows.length === tableData.length}
              />
            </th>
            {COMMON_EDIT_TABLE_TH.map((item, index) => (
              <th key={index}>{item.th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <Checkbox
                  checked={selectedRows.includes(rowIndex)}
                  onChange={(isChecked) => handleSelectRow(rowIndex, isChecked)}
                />
              </td>
              {COMMON_EDIT_TABLE_TH.map((item, cellIndex) => {
                const field = item.th.toLowerCase();
                if (field === "월회비" || field === "사원번호") {
                  return (
                    <td key={cellIndex}>
                      <TableInput
                        type="text"
                        value={row[field]}
                        onChange={(e) =>
                          handleInputChange(rowIndex, field, e.target.value)
                        }
                      />
                    </td>
                  );
                }
                return <td key={cellIndex}>{row[field]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableCommonEditWrap>
  );
}

const TableCommonEditWrap = styled.div`
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

const TableInput = styled.input`
  width: 96%;
  height: 80%;
  border: none;
  background: transparent;
  text-align: center;
  font-size: 1.4rem;
  color: red;
  border: 1px solid #ddd;
  background: #fff;
  text-align: left;
  text-indent: 10px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    background: #fff;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
export default TableCommonEdit;
