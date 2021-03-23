import React from 'react';
import './buttonStyles.less';

type TProps = {
    textTitle: string;
}

const CustomButton: React.FC<TProps> = props => {
    const {
        textTitle = 'Button',
    } = props;

    return (
        <button type={'submit'}
                children={textTitle}
                className={'border-button'}
        />
    );
};

export default React.memo(CustomButton);
