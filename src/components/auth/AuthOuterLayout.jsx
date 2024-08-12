import React from "react";
import styled from "styled-components";

const AuthOuterLayout = ({ children }) => {
  return (
    <AuthOuterLayoutWrap>
      <BlueBg
        src="img/auth/bg.png"
        alt="파란배경 이미지"
        className="show-desktop"
      />
      <BlueBgMobile
        src="img/auth/bg_m.png"
        alt="파란배경 이미지"
        className="show-mobile"
      />
      {children}
    </AuthOuterLayoutWrap>
  );
};

const AuthOuterLayoutWrap = styled.div`
  position: relative;
  height: 100%;
`;

const BlueBg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const BlueBgMobile = styled.img`
  position: fixed;
  top: -19.7%;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default AuthOuterLayout;
