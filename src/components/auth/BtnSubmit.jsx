import React from "react";
import styled from "styled-components";

const BtnSubmit = ({ text, type }) => {
  return <BtnSubmitWrap type={type}>{text}</BtnSubmitWrap>;
};

const BtnSubmitWrap = styled.button`
  width: 100%;
  height: 70px;
  border-radius: 999px;
  border: none;
  background: #1e3d73;
  color: #fff;
  font-size: 3rem;

  box-shadow: 0px 7px 5px 0px rgba(41, 41, 41, 0.46);
  -webkit-box-shadow: 0px 7px 5px 0px rgba(41, 41, 41, 0.46);
  -moz-box-shadow: 0px 7px 5px 0px rgba(41, 41, 41, 0.46);
  @media screen and (max-width: 1024px) {
    height: 55px;
    font-size: 2.4rem;
    box-shadow: 0px 7px 5px 0px rgba(201, 201, 201, 0.75);
    -webkit-box-shadow: 0px 7px 5px 0px rgba(201, 201, 201, 0.75);
    -moz-box-shadow: 0px 7px 5px 0px rgba(201, 201, 201, 0.75);
  }
`;

export default BtnSubmit;
