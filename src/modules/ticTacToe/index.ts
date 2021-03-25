import { connect } from 'react-redux';
import Component from './TicTacToe';
import * as selectors from './selectors';
import { Dispatch } from 'redux';
import { State, TPayloadSetSymbolOnGameBoard } from '../../types';
import * as actions from './actions';

export const mapStateToProps = (state: State) => ({
    isWin: selectors.getIsWin(state),
    currentGameBoard: selectors.getCurrentGameBoard(state),
    currentPlayerSymbol: selectors.getCurrentPlayerSymbol(state),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    setPlayerSymbol: (payload: TPayloadSetSymbolOnGameBoard) => dispatch(actions.setPlayerSymbol(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Component);
