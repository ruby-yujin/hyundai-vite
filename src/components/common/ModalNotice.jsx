import React from "react";
import styled from "styled-components";

function ModalNotice() {
  return (
    <NoticeModalContent>
      <img src="/img/general_affairs.png" alt="" />
      <img src="/img/member_popup.png" alt="" />

      <DintShowCheck>
        <input type="checkbox" />
        <p>오늘 하루 안보기</p>
      </DintShowCheck>
    </NoticeModalContent>
  );
}

export default ModalNotice;

const NoticeModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    > img {
      max-width: 300px;
    }
  }
`;
const DintShowCheck = styled.div`
  height: 30px;
  margin: 0 -10px -10px -10px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 5px;
    color: #fff;
    font-size: 1.4rem;
  }
`;
