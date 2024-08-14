import React from "react";
import styled from "styled-components";

function ContentBottom({ children }) {
  return <ContentBottomWrap>{children}</ContentBottomWrap>;
}

const ContentBottomWrap = styled.div`
  padding: 0rem 4rem 2rem;
  @media screen and (max-width: 1024px) {
    padding: 0rem 1rem 2rem;
  }
`;

export default ContentBottom;
