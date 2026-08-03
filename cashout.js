import { mobileNumberValidator, amountValidator, pinValidator, el_totalAmount, getBalance, updateBalance} from "./machine.js";

let withdraw_btn = document.querySelector("#withdraw-btn");
let agent_number = document.querySelector("#agent-number")
let amount = document.querySelector("#amount")
let pin = document.querySelector("#pin");



withdraw_btn.addEventListener("click", () => {
    let agentNumber = agent_number.value;
    let amountVal = amount.value;
    let pinVal = pin.value;
    let totalAmountVal = getBalance();
    let check=true;
    
    if(mobileNumberValidator(agentNumber) && amountValidator(amountVal) && pinValidator(pinVal)){
        alert("Withdraw Successful");
        totalAmountVal = totalAmountVal-Number(amountVal);
        // el_totalAmount.innerText = totalAmountVal;
        updateBalance(totalAmountVal);
        agent_number.value = "";
        amount.value = "";
        pin.value = "";
    }

})