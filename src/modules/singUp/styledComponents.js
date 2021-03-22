import styled from 'styled-components';

export const WrapperSignUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: @gradient1;
`;

export const Container = styled.div``;

Container.header = styled.div`
  padding: 20px;
  font-size: 30px;
  color: @color2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

SignUpForm.input = styled.input`
  height: 30px;
  font-size: 20px;
  outline: none;
  padding: 10px;
`;

Container.Content = Content;
Content.SignUpForm = SignUpForm;
WrapperSignUp.Container = Container;