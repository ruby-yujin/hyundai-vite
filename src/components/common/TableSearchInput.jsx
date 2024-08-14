import React from "react";
import styled from "styled-components";

function TableSearchInput({ filterId, labelText, value, onChange }) {
  return (
    <SearchGroup>
      <label htmlFor={labelText} id={filterId}>
        {labelText}
      </label>
      <input type="text" maxLength={"100"} value={value} onChange={onChange} />
    </SearchGroup>
  );
}

const SearchGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  label {
    font-size: 1.6rem;
    color: #000;
    font-weight: 500;
  }
  input {
    width: 30px;
    height: 20px;
    border: 1px solid #666;
    border-radius: 6px;
    padding: 2px;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1024px) {
    label {
      font-size: 1.3rem;
      color: #666;
    }
  }
`;

export default TableSearchInput;
