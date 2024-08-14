import React from "react";
import styled from "styled-components";

function ModalNotice() {
  return (
    <NoticeModalContent>
      <img src="/img/general_affairs.png" alt="" />
      <img src="/img/member_popup.png" alt="" />
      {/* <NoticeBox>
        <NoticeBoxTop>총무업무</NoticeBoxTop>
        <NoticeBoxText>
        
           <dl>
            <dt>신규</dt>
            <dd>
              대표자 신분증, 도장(서명 가능), 단체회비 가입신청서 작성본, 입금할
              금액
              <span>
                ※ 단체회비가입신청서에 서명일 경우 신청자신분증사본 첨부
              </span>
            </dd>
          </dl>

          <dl>
            <dt>금액변경</dt>
            <dd>
              대표자 신분증, 도장(서명 가능), 단체회비 가입신청서 작성본, 입금할
              금액
              <span>
                ※ 단체회비가입신청서에 서명일 경우 신청자신분증사본 첨부
              </span>
            </dd>
          </dl>

          <dl>
            <dt>해지</dt>
            <dd>
              대표자 신분증, 단체회비 통장, 도장 (기존통장에 도장으로 등록되어
              있을 경우)
              <span>
                ※ 타 금고에서 해지 시 계속 급여공제 되며, 단체통장으로
                입금처리가 되지 않습니다. 당 금고에 방문하셔서 해지신청 부탁
                드립니다.
              </span>
            </dd>
          </dl> 
        </NoticeBoxText>
      </NoticeBox> */}
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

  /* min-width: 350px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4.44px 1.56px rgba(0, 0, 0, 0.1); */
`;
const NoticeBox = styled.div``;
const NoticeBoxTop = styled.h3`
  background: #203e74;
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  padding: 3% 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const NoticeBoxText = styled.div`
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  flex-direction: column;

  dl {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    dt {
      width: 56px;
      background: #275196;
      color: #fff;
      padding: 2px 4px;
      font-size: 1.2rem;
      text-align: justify;
    }
    dd {
    }
  }
`;
