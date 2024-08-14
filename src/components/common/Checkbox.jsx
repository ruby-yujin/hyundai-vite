import React from "react";
import styled from "styled-components";

function Checkbox({ onChange, checked }) {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <CheckboxWrap onClick={handleChange}>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <StyledCheckbox>
        <CheckboxImage
          src={checked ? "/img/checkbox_on.svg" : "/img/checkbox.svg"}
          alt="checkbox"
        />
      </StyledCheckbox>
    </CheckboxWrap>
  );
}

const CheckboxWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

const CheckboxImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default Checkbox;
