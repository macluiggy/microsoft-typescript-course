"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    var interestRate = loanTerms.interestRate, principal = loanTerms.principal;
    var interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
//* Returns "The interest only loan payment is 125.00"
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    var interestRate = loanTerms.interestRate, principal = loanTerms.principal, months = loanTerms.months;
    var interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
var interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
var conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
