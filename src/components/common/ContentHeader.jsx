import React from "react";
import styled from "styled-components";

function ContentHeader({ children, colstyle }) {
  return <ContentHeaderWrap className={colstyle}>{children}</ContentHeaderWrap>;
}

const ContentHeaderWrap = styled.div`
  padding: 3rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  &.content-header-col {
    flex-direction: inherit;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 2rem 1rem;
    &.content-header-col {
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem 1rem 1rem;
    }
  }
`;

export default ContentHeader;
