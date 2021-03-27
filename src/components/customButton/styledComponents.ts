import styled from 'styled-components';

interface IButton {
    fontSize?: number,
    textColor?: string,
    borderColor?: string,
    borderWidth?: number,
    borderStyle?: string,
    backgroundColor?: string,
}

export const Button = styled.button<IButton>`
    width: 100%;
    height: 100%;
    ${props => props.fontSize &&  `font-size: ${props.fontSize}px`};
    cursor: pointer;
    padding: 5px;
    ${props => props.borderStyle &&  `border-style: ${props.borderStyle}`};
    ${props => props.textColor &&  `color: ${props.textColor}`};
    ${props => props.borderColor &&  `border-color: ${props.borderColor}`};
    ${props => props.borderWidth &&  `border-width: ${props.borderWidth}px`};
    ${props => props.backgroundColor &&  `background: ${props.backgroundColor}`};
`;