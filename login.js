// import { mobileNumberValidator, pinValidator } from "./machine.js";
let mobileNumberValidator = function(mobileNumber) {
    if(mobileNumber === ""){
        alert("Please enter agent number");
        return false;
    }
    let check = /^01\d{9}$/.test(mobileNumber);
    if(!check){
        alert("Agent Number is not valid");
        return false;
    }
    return true;
}

let pinValidator = function(pinNumber){
    if(pinNumber === ""){
        alert("Please enter PIN");
        return false;
    }
    if(pinNumber.length !== 4){
        alert("PIN must be 4 digit");
        return false;
    }
    return true;
}


document.querySelector("#login-btn").addEventListener("click", async function() {
    const number = document.querySelector("#mobile-number").value;
    const pin = document.querySelector("#pin").value;
    
    if(mobileNumberValidator(number) && pinValidator(pin)){
        alert("Login Successful");
        window.location.replace("home.html");
    }
})