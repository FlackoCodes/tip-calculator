let billTotal = document.querySelector('.bill-amount');

let fivePercent = document.querySelector('.five-per');
let tenPercent = document.querySelector('.ten-per');
let fifteenPercent = document.querySelector('.fifteen-per');
let twentyFivePercent = document.querySelector('.twentyfive-per');
let fiftyPercent = document.querySelector('.fifty-per');
let customPercent = document.querySelector('.persons');

let numberOfPeople = document.querySelector('.__people');

let resetButton = document.querySelector('.reset-btn');

let tipAmount = document.querySelector('.tip_amount');
let totalPerPerson = document.querySelector('.total-per');

let displayError = document.querySelector('span')



const reset = ()=>{
    tipAmount.textContent = "0.00";
    totalPerPerson.textContent =  "0.00";
    billTotal.value = "";
    numberOfPeople.value = "";
    customInput.value = "";
}

const calculateTip = (percentage)=>{
    let billAmount = billTotal.value
    let numericValue = parseFloat(percentage.textContent.replace("$", ""));
    let actualTip = numericValue / 100
    let tip = billAmount * actualTip

    let squad = parseInt(numberOfPeople.value)

    let tipPer = tip/squad

    
    if (squad && tipPer) {
        tipAmount.textContent = `$${tip.toFixed(2)}`;
        totalPerPerson.textContent = `$${tipPer.toFixed(2)}`
    }  else if (squad === 0 || squad === ""){
        numberOfPeople.classList.add('error');
        displayError.classList.add('span-error');
        reset()
    }
        else{
        reset()
    }

    
}


resetButton.addEventListener('click', reset)


const customInput = (event)=>{
    let custom = parseFloat(customPercent.value).toFixed(2);
    let actual = custom/100

    if (event.key =="Enter") {
        let billAmount = billTotal.value
        let tip = billAmount * actual

        let squad = parseInt(numberOfPeople.value)

        let tipPer = tip/squad
        
        if (tipPer && squad) {
            tipAmount.textContent = `$${tip.toFixed(2)}`;
            totalPerPerson.textContent = `$${tipPer.toFixed(2)}`;
        } else{
            reset()
        }

        
    }
    
}

customPercent.addEventListener('keydown', customInput);
fivePercent.addEventListener('click', ()=> calculateTip(fivePercent));
fifteenPercent.addEventListener('click', ()=> calculateTip(fifteenPercent));
tenPercent.addEventListener('click', ()=> calculateTip(tenPercent));
twentyFivePercent.addEventListener('click', ()=> calculateTip(twentyFivePercent));
fiftyPercent.addEventListener('click', ()=> calculateTip(fiftyPercent));
