import React from 'react';
import Routers from './Routers.jsx';
import Modals from "../../modals";

const MainPage = props => {
    return (
        <>
            <Routers/>
            <Modals/>
        </>
    )
}

export default React.memo(MainPage);
