const  origPuhunan = 10000000; // CHANGE. THIS IS YOUR MONEY
let puhunan = origPuhunan // 
let tuboannual = 0.04; // CHANGE THIS INTEREST PER YEAR
let tuboperMonth = tuboannual / 12;

let finalMoney; 

function n(num) {
  // console.log(typeof num)
  if(typeof num !== 'number'){
    return 'not a number, please enter a number'
  }
  return num.toLocaleString('en-US', {style: 'currency', currency: "PHP"})
}

const terms  = 12; //months

const months = ['JANUARY', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']

for(let i = 0; i < terms; i++){
    let tubo = (puhunan * tuboperMonth)
    puhunan += tubo
    console.log(months[i % months.length] + ": " + (n(tubo)))
}

console.log(`
ORIGINAL PUHUNAN: ${n(origPuhunan)}
TOTAL MONEY: ${n(puhunan)}
FOR: ${terms} months (${(terms/12).toFixed(1)} yr/s)
INTEREST EARNED: ${n(((puhunan - origPuhunan) - 0.2))}
`)