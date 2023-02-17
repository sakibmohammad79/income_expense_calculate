function inputFieldValue(inputId){
    const income = document.getElementById(inputId);
    const incomeValueString = parseFloat(income.value);
    const incomeValue = incomeValueString;
    return incomeValue;
}
function textFieldValue(inputTextId){
    const TextField = document.getElementById(inputTextId);
    const textFieldValueString = parseFloat(TextField.innerText);
    const previousTextFieldValue = textFieldValueString;
    return previousTextFieldValue;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncome = inputFieldValue('income-field');

    const foodValue = inputFieldValue('food-field');
    const rentValue = inputFieldValue('rent-field');
    const clothesValue = inputFieldValue('cloth-field');
    const totalExpense = foodValue + rentValue + clothesValue;
    
    const expenses = document.getElementById('expense-field');
    expenses.innerText = totalExpense;

    const balance = document.getElementById('balance-field');
    balance.innerText = totalIncome - totalExpense;
})

document.getElementById('save-btn').addEventListener('click', function(){ 
    const previousSaveFieldValue = inputFieldValue('save-field');
    const newSaveFieldValuePercent =(previousSaveFieldValue/100);
    //console.log(newSaveFieldValuePercent);
    const totalIncomes = inputFieldValue('income-field');
    //console.log(totalIncome);
    const saving = document.getElementById('saving-field');
    saving.innerText = newSaveFieldValuePercent * totalIncomes;

    const balance = textFieldValue('balance-field');

    const savingAmount = textFieldValue('saving-field');

    const remaining = document.getElementById('remaining-field');
    remaining.innerText = balance - savingAmount;
 })