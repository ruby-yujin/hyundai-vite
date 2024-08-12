import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

const AuthPageTitle = ({ title, description }) => {
  return (
    <AuthPageTitleWrap>
      <img src="img/auth/icon-peoples.png" alt="단체아이콘" />
      <h1>{title}</h1>
      <p>{description}</p>
      <BtnHome to="/">
        <House />
      </BtnHome>
    </AuthPageTitleWrap>
  );
};

const AuthPageTitleWrap = styled.div`
  position: relative;
  color: #fff;
  img {
    width: 200px;
  }
  h1 {
    font-size: 10rem;
    font-weight: 400;
    margin: 40px 0 20px;
  }
  p {
    font-size: 7rem;
    font-weight: 400;
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3.8rem;
    img {
      width: 7rem;
    }
    h1 {
      font-size: 3.4rem;
      margin: 20px 0 10px;
    }
    p {
      font-size: 2.4rem;
    }
  }
`;

const BtnHome = styled(Link)`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 1.5rem;
    left: 1rem;
    width: 4rem;
    svg {
      color: #fff;
    }
  }
`;

export default AuthPageTitle;
