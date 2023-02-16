function inputFieldValue(inputId){
    const income = document.getElementById(inputId);
    const incomeValueString = parseInt(income.value);
    const incomeValue = incomeValueString;
    return incomeValue;
}

// function textFieldValue(textFieldId){
//     const expenses = document.getElementById(textFieldId);
//     const expenseValueString = expenses.innerText;
//     const expenseValue = parseInt(expenseValueString);
//     return expenseValue;
// }

document.getElementById('calculate-btn').addEventListener('click', function(){
    // const income = document.getElementById('balance-field');
    // const incomeValueString = parseInt(income.value);
    // const incomeValue = incomeValueString;
    const incomeValue = inputFieldValue('income-field');

    const foodValue = inputFieldValue('food-field');
    const rentValue = inputFieldValue('rent-field');
    const clothesValue = inputFieldValue('cloth-field');
    const totalExpense = foodValue + rentValue + clothesValue;

    // const expenses = document.getElementById('expense-field');
    // const expenseValueString = expenses.innerText;
    // const expenseValue = parseInt(expenseValueString);
    const expenses = document.getElementById('expense-field');
    const expenseValueString = expenses.innerText;
    const expensePreviousValue = parseInt(expenseValueString);
    const expenseNewValue = totalExpense - expensePreviousValue;
    expenses.innerText = expenseNewValue;



    
    
})