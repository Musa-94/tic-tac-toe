import styled, { StyledComponentBase } from 'styled-components';

interface IWrapper extends StyledComponentBase<'div', any> {
    header?: any,
    Content?: any,
}
interface IForm extends StyledComponentBase<any, any> {
    input?: any,
    ButtonWrapper?: any
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
  padding: ${props => props.theme.coefficient * 20}px;
  font-size: ${props => props.theme.coefficient * 30}px;
  color: black;
`;

export const Content: IContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form: IForm = styled.form`
  width: ${props => props.theme.coefficient * 300}px;
  height: ${props => props.theme.coefficient * 300}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
Form.input = styled.input`
  height: ${props => props.theme.coefficient * 30}px;
  font-size: ${props => props.theme.coefficient * 20}px;
  outline: none;
  padding: ${props => props.theme.coefficient * 10}px;
`;
Form.ButtonWrapper = styled.div``;

Content.Form = Form;
Wrapper.Content = Content;