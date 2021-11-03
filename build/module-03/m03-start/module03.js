"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  EXERCISE 1
    TODO: Declare the Loan interface. */
/*  TODO: Declare the ConventionalLoan interface. */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(principle, interestRate) {
    // Calculates the monthly payment of an interest only loan
    var interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(principle, interestRate, months) {
    // Calculates the monthly payment of a conventional loan
    var interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
var interestOnlyPayment = calculateInterestOnlyLoanPayment(30000, 5);
var conventionalPayment = calculateConventionalLoanPayment(30000, 5, 180);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
