import React from "react";
import styled from "styled-components";

function BtnPeriod() {
  return (
    <BtnPeriodWrap>
      <h3>조회기간 : </h3>
      <div>
        <BtnPeriodItem className="active">오늘</BtnPeriodItem>
        <BtnPeriodItem>1주일</BtnPeriodItem>
        <BtnPeriodItem>1개월</BtnPeriodItem>
        <BtnPeriodItem>3개월</BtnPeriodItem>
      </div>
    </BtnPeriodWrap>
  );
}

const BtnPeriodWrap = styled.div`
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
  }
  > div {
    display: flex;
    gap: 5px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    > div {
      width: 100%;
    }
    h3 {
      font-size: 2rem;
      padding-left: 10px;
      &:before {
        content: "";
        width: 2px;
        height: 20px;
        background: #000;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const BtnPeriodItem = styled.button`
  width: 50px;
  height: 24px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #295095;
  &.active {
    background: #1f3e74;
  }
  @media screen and (max-width: 1024px) {
    width: 25%;
    height: 32px;
    flex-direction: column;
    font-size: 1.6rem;
  }
`;

export default BtnPeriod;
