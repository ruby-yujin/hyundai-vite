import React from "react";
import { Formik } from "formik";

import { AuthFormWrap } from "./LoginForm";
import InputGroup from "../common/InputGroup";
import BtnSubmit from "./BtnSubmit";
import { BtnWrap } from "./LoginForm";

const initialValues = { memberNumber: "", memberPhone: "", memberPassword: "" };

const RegisterForm = () => {
  return (
    <AuthFormWrap>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <form action="">
          <InputGroup
            name="memberNumber"
            labelText="사원번호"
            inputType="text"
            placeholder="F00000"
            disabled={true}
          />
          <InputGroup
            name="memberNumber"
            labelText="사원명"
            inputType="text"
            placeholder="홍길동"
            disabled={true}
          />
          <InputGroup
            name="memberPhone"
            labelText="휴대폰번호"
            inputType="text"
            placeholder="010-0000-0000"
            disabled={true}
          />
          <InputGroup
            name="memberPassword"
            labelText="새 비밀번호"
            inputType="password"
            placeholder="새 비밀번호를 입력해주세요."
            disabled={false}
          />
          <InputGroup
            name="memberPassword"
            labelText="비밀번호 확인"
            inputType="password"
            placeholder="새 비밀번호를 입력해주세요."
            disabled={false}
          />

          <BtnWrap>
            <BtnSubmit type="submit" text="사용 등록" />
          </BtnWrap>
        </form>
      </Formik>
    </AuthFormWrap>
  );
};

export default RegisterForm;
