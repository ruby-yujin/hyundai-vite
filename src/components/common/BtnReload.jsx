import React from "react";
import styled from "styled-components";
import { RefreshCcw } from "lucide-react";

function BtnReload() {
  return (
    <BtnReloadWrap>
      <RefreshCcw color="#ffffff" size={14} />
      새로고침
    </BtnReloadWrap>
  );
}

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

export default BtnReload;
