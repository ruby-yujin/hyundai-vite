import React from "react";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import { AuthFormWrap } from "./LoginForm";
import InputGroup from "../common/InputGroup";
import BtnSubmit from "./BtnSubmit";
import { BtnWrap } from "./LoginForm";
import { ChangePwSchema } from "../../schema/formSchema";

const initialValues = {
  memberNumber: "F0100000",
  memberName: "홍길동",
  memberPhone: "010-0000-0000",
  memberPassword: "",
  memberPasswordConfirm: ""
};

const ChangePasswordForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthFormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={ChangePwSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputGroup
              type="text"
              name="memberNumber"
              placeholder="회원번호"
              disabled
            />
            <ErrorMessage name="memberNumber" component={ErrorText} />

            <InputGroup
              type="text"
              name="memberName"
              placeholder="이름"
              disabled
            />
            <ErrorMessage name="memberName" component={ErrorText} />

            <InputGroup
              type="text"
              name="memberPhone"
              placeholder="휴대폰 번호"
              disabled
            />
            <ErrorMessage name="memberPhone" component={ErrorText} />

            <InputGroup
              inputType="password"
              name="memberPassword"
              placeholder="새 비밀번호"
            />
            <ErrorMessage name="memberPassword" component={ErrorText} />

            <InputGroup
              inputType="password"
              name="memberPasswordConfirm"
              placeholder="새 비밀번호 확인"
            />
            <ErrorMessage name="memberPasswordConfirm" component={ErrorText} />

            <BtnWrap>
              <BtnSubmit
                type="submit"
                disabled={isSubmitting}
                text="비밀번호 변경"
              />
            </BtnWrap>
          </Form>
        )}
      </Formik>
    </AuthFormWrap>
  );
};

export default ChangePasswordForm;

const ErrorText = styled.div`
  color: #f8fc12;
  font-size: 1.2rem;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 30px;
`;
