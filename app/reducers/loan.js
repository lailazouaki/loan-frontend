import { actionTypes } from '../actions/loanActions';
import Immutable, { Map } from 'immutable';

const initialState = {
  loans: Map({}),
  selectedAmount: 0,
};

export default function loan(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ALL_LOANS:
      return {
        ...state,
        loans: Map(action.loans.map(function(item) {
          return [item.loanId, item];
        }))
      };
    case actionTypes.SELECT_LOAN:
      action.loan.selected = !action.loan.selected

      return {
        ...state,
        loans: state.loans,
        selectedAmount: action.loan.selected? state.selectedAmount + action.loan.amount: state.selectedAmount - action.loan.amount
      };

    case actionTypes.UPDATE_COMMENT:
      action.loan.comment = action.newComment

      return {
        ...state,
        loans: state.loans,
        selectedAmount: action.loan.selected? state.selectedAmount + action.loan.amount: state.selectedAmount - action.loan.amount
      };

    default:
      return state;
  }
}