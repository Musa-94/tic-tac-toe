import React from 'react';
import { connect } from 'react-redux';

import Component from './LoginPage.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    openModalWindow: payload => dispatch(actions.onOpenModalWindow(payload)),
    closeModalWindow: payload => dispatch(actions.onCloseModalWindow(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component);
