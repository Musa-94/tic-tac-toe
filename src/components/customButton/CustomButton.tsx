import React from 'react';
import { Button } from './styledComponents';

type TProps = {
    type?: 'submit' | 'reset' | 'button',
    fontSize?: number,
    textColor?: string,
    textTitle?: string;
    borderColor?: string,
    borderWidth?: number,
    borderStyle?: string,
    handleClick?: React.MouseEventHandler<HTMLButtonElement>,
    handleSubmit?: React.FormEventHandler<HTMLButtonElement>,
    backgroundColor?: string,
}

const CustomButton: React.FC<TProps> = props => {
    const {
        type = 'button',
        fontSize = 20,
        textTitle = 'Button',
        textColor,
        borderColor,
        borderWidth,
        borderStyle,
        handleClick,
        handleSubmit,
        backgroundColor,
    } = props;

    return (
        <Button type={type}
                children={textTitle}
                onClick={handleClick}
                onSubmit={handleSubmit}
                fontSize={fontSize}
                textColor={textColor}
                borderColor={borderColor}
                borderWidth={borderWidth}
                borderStyle={borderStyle}
                backgroundColor={backgroundColor}
        />
    );
};

export default React.memo(CustomButton);
