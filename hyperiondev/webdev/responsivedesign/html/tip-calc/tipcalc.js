// Tip Calc v2.1


function getInput(){
    console.log("tip calc")
    let billTotal = parseFloat(prompt("Enter bill total: "));
    let totalPayee = parseInt(prompt("Shared by how many?"));
    let tipPct = parseFloat(prompt("What's the tip percentage?\n (0.5 = 5%, 0.10 = 10%, 0.25 = 25%)"));

    if (totalPayee === 1){  
        let tipTotal = (billTotal * tipPct);
        let maxTotal = (billTotal + tipTotal);
        tipTotal = tipTotal.toFixed(2); // enables correct use of decimal points when working with currency
        maxTotal = maxTotal.toFixed(2);
        console.log(maxTotal, tipTotal) // log this
        document.getElementById('maxtotal').innerText = maxTotal
        document.getElementById('total').innerText = tipTotal; //change html element    
        document.getElementById('totaleach').innerText = "£" + maxTotal;

        alert(` £${billTotal} divided by 1 person, with a ${tipPct}% tip is £${tipTotal}.\n total amount to pay is £${maxTotal}.`);
    }

    if (totalPayee > 1){
            let tipTotal = (billTotal * tipPct) / totalPayee;
            let maxTotal = (billTotal + tipTotal);
            let perPerson = (tipTotal / totalPayee);
            let paymentPer = (maxTotal / totalPayee);
            tipTotal = tipTotal.toFixed(2);
            maxTotal = maxTotal.toFixed(2);
            perPerson = perPerson.toFixed(2);
            paymentPer = paymentPer.toFixed(2);
            console.log("bill: £", billTotal, "tip pct: " , tipPct, "tip: £", tipTotal, "total: £", maxTotal, "per person: £", perPerson);
            document.getElementById('maxtotal').innerText = "£" + maxTotal 
            document.getElementById('total').innerText = "£" + tipTotal;
            document.getElementById('totaleach').innerText = "£" + paymentPer; // change elements
            alert(`£${billTotal} divided by ${totalPayee} people, with a ${tipPct}% tip is: £${tipTotal}. \n total amount to pay is: £${maxTotal} \n the tip is: £${tipTotal}.\n amount required per person is: £${perPerson}`);
        }
    } // fixed some errors regarding output and vars 

