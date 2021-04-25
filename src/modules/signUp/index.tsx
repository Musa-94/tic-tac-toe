import React from 'react';
import { connect } from 'react-redux';
import { Store, Dispatch } from 'redux';
import * as selectors from './selectors';
import Component from './SignUp';

const mapStateToProps = (state: Store) => ({
    coefficient: selectors.getCoefficient(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
