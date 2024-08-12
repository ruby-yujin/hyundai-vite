import React from "react";
import styled from "styled-components";

function Btn3wayBottom({
  firstBtnText,
  firstBtnType,
  firstBtnBgColor,
  secondBtnText,
  secondBtnType,
  secondBtnBgColor,
  thirdBtnType,
  thirdBtnBgColor,
  thirdBtnText
}) {
  return (
    <Btn3wayBottomWrap>
      <Btn2Way type={firstBtnType} className={firstBtnBgColor}>
        {firstBtnText}
      </Btn2Way>
      <Btn2Way type={secondBtnType} className={secondBtnBgColor}>
        {secondBtnText}
      </Btn2Way>
      <Btn2Way type={thirdBtnType} className={thirdBtnBgColor}>
        {thirdBtnText}
      </Btn2Way>
    </Btn3wayBottomWrap>
  );
}

const Btn3wayBottomWrap = styled.div`
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
  &.light-gray {
    background: #939598;
  }

  @media screen and (max-width: 1024px) {
    width: 46px;
    font-size: 1rem;
  }
`;

export default Btn3wayBottom;
