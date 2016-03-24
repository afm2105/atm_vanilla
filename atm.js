var checkingAmt = 0;
var savingsAmt=0;

var checkDepositButton = document.querySelector("#checkingDepositButton");
console.log(checkDepositButton);

function depositButtonClick() {
    checkingAmt = checkingAmt + parseInt(document.querySelector("#checkingAmount").value);
    document.querySelector("#checkingAmount").value = "";
//    document.querySelector("#checkingAmount").reset();
//    document.querySelector("#checkingDepositButton").placeholder="enter an amount";
//    document.querySelector("div #checkingBalanceDiv")
    document.querySelector("#checkingBalanceDiv").innerHTML = checkingAmt;
}

var checkWithdrawButton = document.querySelector("#checkingWithdrawalButton");
console.log(checkWithdrawButton);

function checkWithdrawButtonClick() {
    checkingAmt = checkingAmt - parseInt(document.querySelector("#checkingAmount").value);
    document.querySelector("#checkingAmount").value = "";
//    document.querySelector("#checkingAmount").reset();
//    document.querySelector("#checkingDepositButton").placeholder="enter an amount";
//    document.querySelector("div #checkingBalanceDiv")
    document.querySelector("#checkingBalanceDiv").innerHTML = checkingAmt;
}

var savDepositButton = document.querySelector("#savingsDepositButton");
console.log(savDepositButton);

function savingsButtonClick() {
    savingsAmt = savingsAmt + parseInt(document.querySelector("#savingsAmount").value);
    document.querySelector("#savingsAmount").value = "";
//    document.querySelector("#checkingAmount").reset();
//    document.querySelector("#checkingDepositButton").placeholder="enter an amount";
//    document.querySelector("div #checkingBalanceDiv")
    document.querySelector("#savingsBalanceDiv").innerHTML = savingsAmt;
}

var savingsWithdrawButton = document.querySelector("#savingsWithdrawalButton");
console.log(savingsWithdrawButton);

function savingswithdrawButtonClick() {
    checkingAmt = checkingAmt - parseInt(document.querySelector("#checkingAmount").value);
    document.querySelector("#checkingAmount").value = "";
//    document.querySelector("#checkingAmount").reset();
//    document.querySelector("#checkingDepositButton").placeholder="enter an amount";
//    document.querySelector("div #checkingBalanceDiv")
    document.querySelector("#checkingBalanceDiv").innerHTML = checkingAmt;
}

checkDepositButton.addEventListener("click", depositButtonClick);
checkWithdrawButton.addEventListener("click", checkWithdrawButtonClick);
savDepositButton.addEventListener("click", savingsButtonClick);
