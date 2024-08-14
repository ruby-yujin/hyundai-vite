import React from "react";
import styled from "styled-components";
import { Circle, CircleCheck } from "lucide-react";

function TopTab() {
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
    <TapWrap>
      <li>{TabTitle("전체", true)}</li>
      <li>{TabTitle("현재 가입 단체", false)}</li>
    </TapWrap>
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
export default TopTab;
