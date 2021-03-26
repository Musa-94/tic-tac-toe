import styled from 'styled-components';

interface IButton {
    fontSize?: number,
    textColor?: string,
    borderColor?: string,
    borderWidth?: number,
    backgroundColor?: string,
}

export const Button = styled.button<IButton>`
    cursor: pointer;
    padding: 5px;
    border-style: solid;
    ${props => props.textColor &&  `color: ${props.textColor}`};
    ${props => props.fontSize &&  `font-size: ${props.fontSize}px`};
    ${props => props.borderColor &&  `border-color: ${props.borderColor}`};
    ${props => props.borderWidth &&  `border-width: ${props.borderWidth}px`};
    ${props => props.backgroundColor &&  `background: ${props.backgroundColor}`};
`;