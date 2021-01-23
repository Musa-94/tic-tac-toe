import React from 'react';
import './buttonStyles.less';

const CustomButton = props => {
    const {
        textTitle
    } = props

    return (
        <a href='/'
           children={textTitle}
           className={'border-button'}
        />
    )
}

export default React.memo(CustomButton);
