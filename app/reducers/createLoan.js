import { actionTypes } from '../actions/loanActions';

const initialState = {
  chosenAmount: 0,
  loanDescription: '',
  loanDuration: 0,
}

export default function createLoan(state = initialState, action){
    switch(action.type) {
        case actionTypes.CHOOSE_AMOUNT:
            return {
                ...state,
                chosenAmount: action.chosenAmount
            }

        case actionTypes.DESCRIBE_LOAN:
            return {
                ...state,
                loanDescription: action.loanDescription
            }

        case actionTypes.CHOOSE_DURATION:
            return {
                ...state,
                loanDuration: action.loanDuration
            }

        default:
            return state
    }
}