function inputFieldValue(inputId){
    const income = document.getElementById(inputId);
    const incomeValueString = parseFloat(income.value);
    const incomeValue = incomeValueString;
    return incomeValue;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncome = document.getElementById('income-field');
    const totalIncomeValueString =parseFloat(totalIncome.value);
    const totalincomeValue = totalIncomeValueString;

    const foodValue = inputFieldValue('food-field');
    const rentValue = inputFieldValue('rent-field');
    const clothesValue = inputFieldValue('cloth-field');
    const totalExpense = foodValue + rentValue + clothesValue;
    
    const expenses = document.getElementById('expense-field');
    const expenseValueString = expenses.innerText;
    const expensePreviousValue = parseInt(expenseValueString);
    const expenseNewValue = totalExpense - expensePreviousValue;
    expenses.innerText = expenseNewValue;
     
    const remainingIncome = totalincomeValue - totalExpense;

    const balance = document.getElementById('balance-field');
    const balanceString = balance.innerText;
    const previousBalance = parseFloat(balanceString);
    const newBalance = previousBalance + remainingIncome;
    balance.innerText = newBalance;
})
document.getElementById('save-btn').addEventListener('click', function(){
    const saveField = document.getElementById('save-field');
    const saveFieldValueString = saveField.value;
    const previousSaveFieldValue = parseFloat(saveFieldValueString);

    const newSaveFieldValue = previousSaveFieldValue/100;
    
    const balance = document.getElementById('balance-field');
    const balanceValueString = parseInt(balance.innerText);
    const balanceValue = balanceValueString;
    const newBalanceVlaue = balanceValue * newSaveFieldValue;

    const savingAmount = document.getElementById('saving-field');
    savingAmount.innerText = newBalanceVlaue;

    const remainingBalanceValue = balanceValue - newBalanceVlaue;

    const remainingBalance = document.getElementById('remaining-field');
    remainingBalance.innerText = remainingBalanceValue;
})