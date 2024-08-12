import React from "react";
import styled from "styled-components";

function Btn2wayBottom({
  firstBtnText,
  firstBtnType,
  firstBtnBgColor,
  secondBtnText,
  secondBtnType,
  secondBtnBgColor,
  onFirstBtnClick, // 첫번째 버튼 onClick
  onSecondBtnClick // 두번째 버튼 onClick
}) {
  const handleFirstBtnClick = () => {
    if (firstBtnText === "조회" && onFirstBtnClick) {
      onFirstBtnClick();
    }
  };

  return (
    <Btn2wayBottomWrap>
      <Btn2Way
        type={firstBtnType}
        className={firstBtnBgColor}
        onClick={handleFirstBtnClick}
      >
        {firstBtnText}
      </Btn2Way>
      <Btn2Way
        type={secondBtnType}
        className={secondBtnBgColor}
        onClick={onSecondBtnClick}
      >
        {secondBtnText}
      </Btn2Way>
    </Btn2wayBottomWrap>
  );
}

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

export default Btn2wayBottom;
