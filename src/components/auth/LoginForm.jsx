import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "../../schema/formSchema";

import InputGroup from "../common/InputGroup";
import OtherLinks from "./OtherLinks";
import BtnSubmit from "./BtnSubmit";

const initialValues = {
  loginMemberId: "",
  loginMemberPhone: "",
  loginMemberPassword: "",
  loginConfirmNumber: ""
};

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <AuthFormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputGroup
              inputType="text"
              name="loginMemberId"
              placeholder="아이디를 입력해주세요"
            />
            <ErrorMessage name="loginMemberId" component={ErrorText} />

            <InputGroup
              inputType="text"
              name="loginMemberPhone"
              placeholder="휴대폰 번호를 입력해주세요"
            />
            <ErrorMessage name="loginMemberPhone" component={ErrorText} />

            <InputGroup
              inputType="password"
              name="loginMemberPassword"
              placeholder="비밀번호를 입력해주세요"
            />
            <ErrorMessage name="loginMemberPassword" component={ErrorText} />

            <ConfirmNumberWrap>
              <div>
                <input type="text" defaultValue="045645" readOnly />
                <Field
                  type="text"
                  name="loginConfirmNumber"
                  placeholder="숫자 6자리를 입력해주세요"
                  as="input"
                />
              </div>

              <ErrorMessage
                name="loginConfirmNumber"
                component={ErrorTextConfirmNum}
              />
            </ConfirmNumberWrap>

            <BtnWrap>
              <BtnSubmit type="submit" text="로그인" disabled={isSubmitting} />
            </BtnWrap>
            <OtherLinks />
          </Form>
        )}
      </Formik>
    </AuthFormWrap>
  );
};

export const AuthFormWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin-top: 3%;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

const ErrorText = styled.div`
  color: #f8fc12;
  font-size: 1.2rem;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 30px;
`;

const ErrorTextConfirmNum = styled.div`
  color: #f8fc12;
  font-size: 1.2rem;

  text-align: center;
  margin-top: 0px;
  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    padding-left: 15px;
  }
`;

const ConfirmNumberWrap = styled.div`
  width: 300px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 70px;
    border: none;
    background: #fff;
    color: #666666;
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 10px;
    &:first-child {
      font-size: 3.5rem;
      letter-spacing: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 94%;
    display: flex;
    justify-content: space-between;
    margin: 2rem auto 3rem;
    > div {
      display: flex;
      justify-content: space-between;
    }
    input {
      width: calc(100% - 100px);
      height: 45px;
      font-size: 1.5rem;
      margin-bottom: 0;
      margin-right: 10px;
      &:first-child {
        letter-spacing: 0;
        width: 100px;
        font-size: 2.2rem;
      }
    }
  }
`;

export const BtnWrap = styled.div`
  margin-top: 10%;
  @media screen and (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
    position: fixed;
    bottom: 8rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
  }
`;

export default LoginForm;
