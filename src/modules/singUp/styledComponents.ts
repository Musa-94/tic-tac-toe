import styled, { StyledComponentBase } from 'styled-components';

interface IWrapper extends StyledComponentBase<'div', any> {
    header?: any,
    Content?: any,
}
interface IForm extends StyledComponentBase<any, any> {
    input?: any
}
interface IContent extends StyledComponentBase<any, any> {
    Form?: any,
}

export const Wrapper: IWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: azure;
`;
Wrapper.header = styled.div`
  padding: 20px;
  font-size: 30px;
  color: black;
`;

export const Content: IContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form: IForm = styled.form`
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
