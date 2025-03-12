function interestsFunc(){
const selectOpt = document.getElementById('interests');
const selectedOpt = selectOpt.value;

if (selectOpt.value === "error") {
    alert("Please select an interest.");
    console.log("no interest selected");
    
}
    else {
        window.open(selectedOpt);
        console.log("window opened with: " + selectedOpt);
    }
}

function clickPicture(){
    alert("Hey! :) ")
    console.log("picture clicked")
}