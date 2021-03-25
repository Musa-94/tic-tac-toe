import React from 'react';
import Routers from './Routers.jsx';
import Modals from 'src/modules/modals';
import { GlobalStyle } from './styledComponents';

const MainPage = () => {
    return (
        <>
            <GlobalStyle/>
            <Routers/>
            <Modals/>
        </>
    )
}

export default React.memo(MainPage);
