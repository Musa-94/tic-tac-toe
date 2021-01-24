import React from 'react';

import PropTypes from 'prop-types';

import './buttonStyles.less';

const CustomButton = props => {
    const {
        textTitle,
    } = props;

    return (
        <button type={'submit'}
                children={textTitle}
                className={'border-button'}
        />
    );
}

CustomButton.propTypes = {
    textTitle: PropTypes.string,
}

CustomButton.defaultProps = {
    textTitle: 'Button',
}

export default React.memo(CustomButton);
