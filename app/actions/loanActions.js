'use strict';
import keymirror from 'keymirror';

export const actionTypes = keymirror({
  LOAD_ALL_LOANS: null,
  SELECT_LOAN: null,
  CHOOSE_AMOUNT: null,
  DESCRIBE_LOAN: null,
  CHOOSE_DURATION: null,
});

export function loadAllLoans(loans) {
  return {
    type: actionTypes.LOAD_ALL_LOANS,
    loans
  };
}

export function selectLoan(loan) {
  return {
    type: actionTypes.SELECT_LOAN,
    loan
  };
}

export function chooseLoanAmount(chosenAmount) {
  return {
    type: actionTypes.CHOOSE_AMOUNT,
    chosenAmount
  }
}

export function chooseLoanDescription(loanDescription) {
  return {
    type: actionTypes.DESCRIBE_LOAN,
    loanDescription
  }
}

export function chooseLoanDuration(loanDuration) {
  return {
    type: actionTypes.CHOOSE_DURATION,
    loanDuration
  }
}