import React from "react";
import { Formik, Form } from "formik";

import { AuthFormWrap } from "./LoginForm";
import InputGroup from "../common/InputGroup";
import BtnSubmit from "./BtnSubmit";
import { BtnWrap } from "./LoginForm";

const initialValues = {
  memberNumber: "",
  memberName: "",
  memberPhone: "",
  memberPassword: ""
};

const ChangePhoneForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <AuthFormWrap>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <InputGroup
              name="memberNumber"
              labelText="사원번호"
              inputType="text"
              placeholder="F00000"
              disabled={true}
            />
            <InputGroup
              name="memberName"
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
              disabled={false}
            />
            <InputGroup
              name="memberPassword"
              labelText="비밀번호"
              inputType="password"
              placeholder="비밀번호를 입력해주세요."
              disabled={false}
            />

            <BtnWrap>
              <BtnSubmit
                type="submit"
                text="휴대폰번호 변경"
                disabled={isSubmitting}
              />
            </BtnWrap>
          </Form>
        )}
      </Formik>
    </AuthFormWrap>
  );
};

export default ChangePhoneForm;
