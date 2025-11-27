//DOM Right
const cardNumber = document.querySelector(".cnum");
const cardName = document.querySelector(".cname");
const cardMon = document.querySelector("#mon");
const cardYear = document.querySelector("#yar");
const threePin = document.querySelector(".cvc");
const errorMsg = document.querySelector(".error-msg");
const errorMsg1 = document.querySelector(".error-msg1");
const errorMsg2 = document.querySelector(".error-msg2");
const errorMsg3 = document.querySelector(".error-msg3");
//DOM left
const form = document.querySelector("#cardform");
const holderName = document.querySelector("#holder-name");
const holderNumber = document.querySelector("#holder-number");
const holderMon = document.querySelector("#holder-month");
const holderYear = document.querySelector("#holder-year");
const holderCvc = document.querySelector("#holder-cvc");
const btn = document.querySelector("#submit-btn");
const leftDisply = document.querySelector(".left form");
const leftthank = document.querySelector(".Completed-state");
const continueBtn = document.querySelector('.Completed-state button');

form.addEventListener("submit",(evt) => {
    evt.preventDefault();
    ValidateCard();
});

function ValidateCard(){
    let allValid = true; // track if all fields are valid
    const cardPatterns = {
        cardHolderName:/^[a-zA-Z\s.'-]{2,50}$/,
        cardHolderNumber:/^(?:4[0-9]{4}[-\s]?|[0-9]{4}[-\s]?){3}[0-9]{4}$/,
        cardHolderMonth:/^(0[1-9]|1[0-2]|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)$/,
        cardHolderYear:/^20[0-9]{2}$/,
        cardHolderCvc:/^\d{3,4}$/
    }

    const nameValue = holderName.value.trim();
    const numberValue = holderNumber.value.trim();
    const monthValue = holderMon.value.trim();
    const yearValue = holderYear.value.trim();
    const cvvValue = holderCvc.value.trim();

    if(!cardPatterns.cardHolderName.test(nameValue)){
        errorMsg.textContent = "Please Enter Your Name as mention on the Card";
        holderName.classList.add("error");
        allValid = false;
    }else{
       errorMsg.textContent ="";
       holderName.classList.remove("error");
       holderName.classList.add("success-msg")
       cardName.textContent = nameValue;
    }

    if(!cardPatterns.cardHolderNumber.test(numberValue)){
        errorMsg1.textContent = "wrong format..!Please Enter Your valid Card Number";
        holderNumber.classList.add("error");
        allValid = false;
    }
    else{
        errorMsg1.textContent = "";
        holderNumber.classList.remove("error");
        holderNumber.classList.add("success-msg")
        cardNumber.textContent = numberValue;
    }

    if(!cardPatterns.cardHolderMonth.test(monthValue)){
       errorMsg2.textContent = "Must be valid";
       holderMon.classList.add("error");
         allValid = false;
    } else{
        errorMsg2.textContent = "";
        holderMon.classList.remove("error");
        holderMon.classList.add("success-msg")
        cardMon.textContent = monthValue;
    }

    if(!cardPatterns.cardHolderYear.test(yearValue)){
       errorMsg2.textContent = "Must be valid";
       holderYear.classList.add("error");
         allValid = false;
    } else{
        errorMsg2.textContent = "";
        holderYear.classList.remove("error");
        holderYear.classList.add("success-msg")
        cardYear.textContent = yearValue;
    }

    if(!cardPatterns.cardHolderCvc.test(cvvValue)){
       errorMsg3.textContent = "can't be blank";
       holderCvc.classList.add("error");
         allValid = false;
    } else{
        errorMsg3.textContent = "";
        holderCvc.classList.remove("error");
        holderCvc.classList.add("success-msg")
        threePin.textContent = cvvValue;
    }
    // If all fields are valid, show completed state and hide the form
    if(allValid){
        leftDisply.style.display = 'none';
        leftthank.style.display = 'flex';
    }
};

// Continue button: hide the completed state, show form again and reset values
continueBtn.addEventListener('click', () => {
    leftthank.style.display = 'none';
    leftDisply.style.display = 'flex';
    // Reset the form and card preview
    form.reset();
    // Reset card display text to defaults
    cardNumber.textContent = '0000000000000000';
    cardName.textContent = 'Your Name Here';
    cardMon.textContent = '00';
    cardYear.textContent = '00';
    threePin.textContent = '000';
    // Remove success/error classes
    [holderName, holderNumber, holderMon, holderYear, holderCvc].forEach(el => {
        el.classList.remove('success-msg');
        el.classList.remove('error');
    });
    // Clear error messages
    [errorMsg, errorMsg1, errorMsg2, errorMsg3].forEach(msg => msg.textContent = '');
});


