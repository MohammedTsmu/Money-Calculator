// Get the input elements
let boy1StocksInput = document.getElementById("boy1-stocks");
let boy2StocksInput = document.getElementById("boy2-stocks");
let girl1StocksInput = document.getElementById("girl1-stocks");
let girl2StocksInput = document.getElementById("girl2-stocks");
let motherStocksInput = document.getElementById("mother-stocks");
let totalStocksTitle = document.getElementById("totalStocksTitle");
let stockValueTitle = document.getElementById("stockValueTitle");
let billsWith = document.getElementById("billsWith");
let billsWithout = document.getElementById("billsWithout");
let billsForEachPersonWith = document.getElementById("billsForEachPersonWith");
let billsForEachPersonWithout = document.getElementById("billsForEachPersonWithout");
let installment = document.getElementById("installment");
let electricity = document.getElementById("electricity");
let water = document.getElementById("water");
let paintCars = document.getElementById("paintCars");
let amountElement = document.getElementById("amount");
let IQD = " دينار عراقي";
let collectedAmount1 = document.getElementById("collectedAmount1");
let collectedAmount2 = document.getElementById("collectedAmount2");
let collectedAmount3 = document.getElementById("collectedAmount3");



// Initialize the amount of money
let amount = 11000000;
let installmentAmount = 1332000;
let electricityAmount = 170000;
let waterAmount = 719500;
let paintCarsAmount = 300000;


amountElement.textContent = amount.toLocaleString();
installment.textContent = installmentAmount.toLocaleString() + IQD;
electricity.textContent = electricityAmount.toLocaleString() + IQD;
water.textContent = waterAmount.toLocaleString() + IQD;
paintCars.textContent = paintCarsAmount.toLocaleString() + IQD;

// Calculate the amount of money for each person
function calculateAmount() {
    // Get the number of stocks owned by each person
    let boy1Stocks = parseFloat(boy1StocksInput.value);
    let boy2Stocks = parseFloat(boy2StocksInput.value);
    let girl1Stocks = parseFloat(girl1StocksInput.value);
    let girl2Stocks = parseFloat(girl2StocksInput.value);
    let motherStocks = parseFloat(motherStocksInput.value);

    // Calculate the value of each stock
    let totalStocks =
        boy1Stocks + boy2Stocks + girl1Stocks + girl2Stocks + motherStocks;
    let stockValue = amount / totalStocks;
    let totalBillsWith = installmentAmount + electricityAmount + waterAmount + paintCarsAmount;
    let totalBillsWithout = installmentAmount + electricityAmount + waterAmount;
    let billsForOnePersonWith = totalBillsWith / 5;
    let billsForOnePersonWithout = totalBillsWithout / 5;

    totalStocksTitle.textContent = totalStocks;
    stockValueTitle.textContent = stockValue.toLocaleString() + IQD;
    billsWith.textContent = totalBillsWith.toLocaleString() + IQD;
    billsWithout.textContent = totalBillsWithout.toLocaleString() + IQD;
    billsForEachPersonWith.textContent = billsForOnePersonWith.toLocaleString() + IQD;
    billsForEachPersonWithout.textContent = billsForOnePersonWithout.toLocaleString() + IQD;

    // ================ I N I T I A L A I 'S ================
    // Calculate the amount of money owned by each person
    let boy1Amount = stockValue * boy1Stocks;
    let boy2Amount = stockValue * boy2Stocks;
    let girl1Amount = stockValue * girl1Stocks;
    let girl2Amount = stockValue * girl2Stocks;
    let motherAmount = stockValue * motherStocks;

    let boy1FinalAmountWith = boy1Amount - billsForOnePersonWith;
    let boy2FinalAmountWith = boy2Amount - billsForOnePersonWith;
    let girl1FinalAmountWith = girl1Amount - billsForOnePersonWith;
    let girl2FinalAmountWith = girl2Amount - billsForOnePersonWith;
    let motherFinalAmountWith = motherAmount - billsForOnePersonWith;

    let boy1FinalAmountWithout = boy1Amount - billsForOnePersonWithout;
    let boy2FinalAmountWithout = boy2Amount - billsForOnePersonWithout;
    let girl1FinalAmountWithout = girl1Amount - billsForOnePersonWithout;
    let girl2FinalAmountWithout = girl2Amount - billsForOnePersonWithout;
    let motherFinalAmountWithout = motherAmount - billsForOnePersonWithout;

    // ================ P R I N T ================
    // Update the amount elements
    let boy1AmountElement = document.getElementById("boy1-amount");
    let boy2AmountElement = document.getElementById("boy2-amount");
    let girl1AmountElement = document.getElementById("girl1-amount");
    let girl2AmountElement = document.getElementById("girl2-amount");
    let motherAmountElement = document.getElementById("mother-amount");

    let boy1FinalAmountWithElement = document.getElementById("boy1-FinalAmountWith");
    let boy2FinalAmountWithElement = document.getElementById("boy2-FinalAmountWith");
    let girl1FinalAmountWithElement = document.getElementById("girl1-FinalAmountWith");
    let girl2FinalAmountWithElement = document.getElementById("girl2-FinalAmountWith");
    let motherFinalAmountWithElement = document.getElementById("mother-FinalAmountWith");

    let boy1FinalAmountWithoutElement = document.getElementById("boy1-FinalAmountWithout");
    let boy2FinalAmountWithoutElement = document.getElementById("boy2-FinalAmountWithout");
    let girl1FinalAmountWithoutElement = document.getElementById("girl1-FinalAmountWithout");
    let girl2FinalAmountWithoutElement = document.getElementById("girl2-FinalAmountWithout");
    let motherFinalAmountWithoutElement = document.getElementById("mother-FinalAmountWithout");

    boy1AmountElement.textContent = boy1Amount.toLocaleString() + IQD;
    boy2AmountElement.textContent = boy2Amount.toLocaleString() + IQD;
    girl1AmountElement.textContent = girl1Amount.toLocaleString() + IQD;
    girl2AmountElement.textContent = girl2Amount.toLocaleString() + IQD;
    motherAmountElement.textContent = motherAmount.toLocaleString() + IQD;

    boy1FinalAmountWithElement.textContent = boy1Amount.toLocaleString() + " - " + billsForOnePersonWith.toLocaleString() + " = " + boy1FinalAmountWith.toLocaleString() + IQD;
    boy2FinalAmountWithElement.textContent = boy2Amount.toLocaleString() + " - " + billsForOnePersonWith.toLocaleString() + " = " + boy2FinalAmountWith.toLocaleString() + IQD;
    girl1FinalAmountWithElement.textContent = girl1Amount.toLocaleString() + " - " + billsForOnePersonWith.toLocaleString() + " = " + girl1FinalAmountWith.toLocaleString() + IQD;
    girl2FinalAmountWithElement.textContent = girl2Amount.toLocaleString() + " - " + billsForOnePersonWith.toLocaleString() + " = " + girl2FinalAmountWith.toLocaleString() + IQD;
    motherFinalAmountWithElement.textContent = motherAmount.toLocaleString() + " - " + billsForOnePersonWith.toLocaleString() + " = " + motherFinalAmountWith.toLocaleString() + IQD;

    boy1FinalAmountWithoutElement.textContent = boy1Amount.toLocaleString() + " - " + billsForOnePersonWithout.toLocaleString() + " = " + boy1FinalAmountWithout.toLocaleString() + IQD;
    boy2FinalAmountWithoutElement.textContent = boy2Amount.toLocaleString() + " - " + billsForOnePersonWithout.toLocaleString() + " = " + boy2FinalAmountWithout.toLocaleString() + IQD;
    girl1FinalAmountWithoutElement.textContent = girl1Amount.toLocaleString() + " - " + billsForOnePersonWithout.toLocaleString() + " = " + girl1FinalAmountWithout.toLocaleString() + IQD;
    girl2FinalAmountWithoutElement.textContent = girl2Amount.toLocaleString() + " - " + billsForOnePersonWithout.toLocaleString() + " = " + girl2FinalAmountWithout.toLocaleString() + IQD;
    motherFinalAmountWithoutElement.textContent = motherAmount.toLocaleString() + " - " + billsForOnePersonWithout.toLocaleString() + " = " + motherFinalAmountWithout.toLocaleString() + IQD;

    collectedAmount1.textContent = (boy1Amount + boy2Amount + girl1Amount + girl2Amount + motherAmount).toLocaleString() + IQD;
    collectedAmount2.textContent = (boy1FinalAmountWith + boy2FinalAmountWith + girl1FinalAmountWith + girl2FinalAmountWith + motherFinalAmountWith).toLocaleString() + IQD;
    collectedAmount3.textContent = (boy1FinalAmountWithout + boy2FinalAmountWithout + girl1FinalAmountWithout + girl2FinalAmountWithout + motherFinalAmountWithout).toLocaleString() + IQD;
}

// Call the calculateAmount function when the page loads and when the input values change
window.addEventListener("load", calculateAmount);
boy1StocksInput.addEventListener("input", calculateAmount);
boy2StocksInput.addEventListener("input", calculateAmount);
girl1StocksInput.addEventListener("input", calculateAmount);
girl2StocksInput.addEventListener("input", calculateAmount);
motherStocksInput.addEventListener("input", calculateAmount);