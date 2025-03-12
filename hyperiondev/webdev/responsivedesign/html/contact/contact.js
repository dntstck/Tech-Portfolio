// js

function contactFunc(){
const selectOpt = document.getElementById('contactlist');
const selectedOpt = selectOpt.value;

if (selectOpt.value === "error") {
    alert("Please select a contact option.");
    console.log("no contact option selected")
}
    else {
        window.open(selectedOpt);
    }
}

function clickPicture(){
    alert("Hey! :) ")
    console.log("picture clicked")
}