import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const SearchableDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "org1", label: "단체1" },
    { value: "org2", label: "단체2" },
    { value: "org3", label: "단체3" }
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`선택된 옵션:`, selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      minHeight: "40px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      boxShadow: "none",
      fontSize: "16px" // 기본 폰트 크기 설정
    }),
    input: (provided) => ({
      ...provided,
      color: "black",
      cursor: "text",
      fontSize: "16px" // 입력 텍스트 폰트 크기
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#888",
      fontSize: "16px" // 플레이스홀더 폰트 크기
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "16px" // 옵션 폰트 크기
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "16px" // 선택된 값 폰트 크기
    })
  };

  return (
    <DropDownWrap>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        placeholder="단체명 및 코드 입력"
        isSearchable={true}
        noOptionsMessage={() => "검색 결과가 없습니다"}
        className="custom-select"
      />
      <BtnSearch>조회</BtnSearch>
    </DropDownWrap>
  );
};

const DropDownWrap = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: 16px; // 기본 폰트 크기 재설정

  .custom-select {
    width: 300px;
    color: #000;
  }

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 1rem 1rem;
  }
`;

const BtnSearch = styled.div`
  width: 90px;
  height: 38px;
  font-size: 16px;
  color: #fff;
  justify-content: center;
  display: flex;
  align-items: center;
  background: #295095;
`;

export default SearchableDropdown;
