import React from 'react'
import styled from 'styled-components'

function InnerContent({children}) {
  return (
    <InnerContentWrap>{children}</InnerContentWrap>
  )
}

const InnerContentWrap = styled.div`
    height:100%;
    background: #fff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;


export default InnerContent