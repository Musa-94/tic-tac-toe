import { connect } from 'react-redux';
import Component from './TicTacToe';
import * as selectors from './selectors';
import { State } from '../../types';

export const mapStateToProps = (state: State) => ({
    currentGameBoard: selectors.getCurrentGameBoard(state),
});

export default connect(mapStateToProps)(Component);
