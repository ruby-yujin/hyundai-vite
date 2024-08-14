import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function OtherLinks() {
  return (
    <OtherLinksWrap>
      <li>
        <Link to="/register">시스템사용 등록</Link>
      </li>
      <li>
        <Line />
      </li>
      <li>
        <Link to="/change-password">비밀번호 변경</Link>
      </li>
      <li>
        <Line />
      </li>
      <li>
        <Link to="change-phone">휴대폰번호 변경</Link>
      </li>
    </OtherLinksWrap>
  );
}

const OtherLinksWrap = styled.ul`
  margin-top: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    padding: 0 0.5rem;
    position: relative;
    a {
      width: 100%;
      display: block;
      color: #fff;
      font-size: 2.2rem;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 310px;
    margin: 7% auto 0;
    position: fixed;
    bottom: 4rem;
    left: 50%;
    margin-left: -155px;
    li {
      text-align: center;

      a {
        color: #000;
        font-size: 1.4rem;
      }
      &:before {
        background: #000;
        height: 14px;
        left: -6px;
        top: 1px;
      }
    }
  }
`;

const Line = styled.span`
  display: block;
  width: 1px;
  height: 16px;
  @media screen and (max-width: 1024px) {
    background: #000;
  }
  background: #fff;
`;

export default OtherLinks;
