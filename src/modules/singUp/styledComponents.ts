import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //background-image: @gradient1;
`;

Wrapper.header = styled.div`
  padding: 20px;
  font-size: 30px;
  //color: @color2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

Form.input = styled.input`
  height: 30px;
  font-size: 20px;
  outline: none;
  padding: 10px;
`;

Content.Form = Form;
Wrapper.Content = Content;
Wrapper.Container = Container;