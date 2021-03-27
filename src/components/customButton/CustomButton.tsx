import React from 'react';
import { Button } from './styledComponents';

type TProps = {
    fontSize?: number,
    textColor?: string,
    textTitle?: string;
    borderColor?: string,
    borderWidth?: number,
    borderStyle?: string,
    backgroundColor?: string,
}

const CustomButton: React.FC<TProps> = props => {
    const {
        fontSize = 20,
        textTitle = 'Button',
        textColor,
        borderColor,
        borderWidth,
        borderStyle,
        backgroundColor,
    } = props;

    return (
        <Button type={'submit'}
                children={textTitle}
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
