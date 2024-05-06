let billTotal = document.querySelector('.bill-amount');

let fivePercent = document.querySelector('.five-per');
let tenPercent = document.querySelector('.ten-per');
let fifteenPercent = document.querySelector('.fifteen-per');
let twnetyFivePercent = document.querySelector('.twentyfive-per');
let fiftyPercent = document.querySelector('.fifty-per');
let customPercent = document.querySelector('.persons');

let numberOfPeople = document.querySelector('.__people');

let resetButton = document.querySelector('.reset-btn');

let tipAmount = document.querySelector('.tip_amount');
let totalPer = document.querySelector('.total-per');



const TipPererson = ()=>{
    
}


fifteenPercent.addEventListener('click', () => {
    let billAmount = billTotal.value
    let numericValue = parseFloat(fifteenPercent.textContent.replace("$", ""));
    let actualTip = numericValue / 100
    let tip = billAmount * actualTip

    let squad = parseInt(numberOfPeople.value)

    let tipPer = tip/squad

    if (squad <= 0) {
        alert('No cant be zero')
    }

    tipAmount.textContent = `$${tip.toFixed(2)}`;
    totalPer.textContent = `%${tipPer.toFixed(2)}`
});

resetButton.addEventListener('click', ()=>{
    tipAmount.textContent = "0.00";
    totalPer.textContent =  "0.00"
})

const customInput = (event)=>{
    let custom = parseFloat(customPercent.value).toFixed(2);
    let actual = custom/100

    if (event.key =="Enter") {
    let billAmount = billTotal.value
    let tip = billAmount * actual

    let squad = parseInt(numberOfPeople.value)

    let tipPer = tip/squad

    if (squad <= 0) {
        alert('No cant be zero')
    }

    tipAmount.textContent = `$${tip.toFixed(2)}`;
    totalPer.textContent = `%${tipPer.toFixed(2)}`
    }
    
}

customPercent.addEventListener('keydown', customInput)