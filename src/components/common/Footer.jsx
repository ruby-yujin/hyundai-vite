import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <CompanyInfo>
        <li>
          <strong>상호명 </strong>
          <span>SK hynix 새마을금고</span>
        </li>
        <li>
          <strong>사업자등록번호</strong>
          <span>126-82-02271</span>
        </li>
        <li>
          <strong>대표자성명</strong>
          <span>문유진</span>
        </li>
        <li>
          <strong>회사대표전화번호</strong>
          <span>031-5185-4001</span>
        </li>
      </CompanyInfo>
      <FamilyCall>
        <li>전자금융/콜 센터(국내) 1599-9000 / 1588-8801</li>
        <li>예적금/대출/공제 상담 031-5185-4001 </li>
        <li>전자금융/콜 센터(국외) +82-2-2192-0200 </li>
        <li>보이스피싱 금융사고 080-890-0201 </li>
      </FamilyCall>
      <Copy>COPYRIGHT SKHYBANK.COM ALL RIGHTS RESERVED </Copy>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding: 2.2rem;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 3rem 2.2rem;
    align-items: flex-start;
  }
`;
const CompanyInfo = styled.ul`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 0.5rem;

    strong {
      display: inline-block;
      font-size: 1.2rem;
      color: #666;
      font-weight: bold;
    }
    span {
      display: inline-block;
      font-size: 1.2rem;
      color: #666;
      font-weight: 300;
    }
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

const FamilyCall = styled.ul`
  max-width: 660px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 2rem auto;
  list-style-type: none;

  li {
    width: 255px;
    padding: 5px 0;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #666;
    &:nth-child(odd) {
      justify-content: flex-start;
    }

    &:nth-child(even) {
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    margin: 2rem auto 4rem;
    li {
      padding: 2px 0;
      width: 100%;
    }
  }
`;

const Copy = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  color: #666;
`;

export default Footer;
