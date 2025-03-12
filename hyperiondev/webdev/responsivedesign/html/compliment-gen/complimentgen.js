// Compliment Generator JS v2.1

const niceMessages = [
    "You're great at everything you do.",
    "Keep it up.",
    "Have a great day!",
    "Here\'s a compliment you beautiful thing",
    "Another compliment? Oh go on then.",
    "Life is definitely better with you around.",
    "Smile! :) ",
    "Oh stop it. You cutie.",
    "You look exceptional today!"
];

// added a function to allow actual random messages
// instead of selecting one manually using [0] index 

function randomCompliment(){
    const randomIdx = Math.floor(Math.random() * niceMessages.length);
    return niceMessages[randomIdx];
}

const getCompliment = randomCompliment(niceMessages);

// old

/* function genCompliment(){
    let userName = prompt("Tell me your name: ");
    let userAge = parseInt(prompt("Whats your age?"));
    let userHobby = prompt("Favourite hobby?");
    let userAnimal = prompt("Favourite animal?");

    if (confirm("Correct?")){
        alert(`Hi ${userName}, you're ${userAge}. Your hobby is ${userHobby} & your favourite animal is ${userAnimal}`);
        console.log(`name: ${userName}\n age: ${userAge}\n hobby: ${userHobby}\n animal: ${userAnimal}\n`);
        alert(`PS: ${getCompliment}`);
        // alert(`PS: ${niceMessages[0]`);
        document.getElementById('name').innerHTML = "Name: " + userName;
        document.getElementById('age').innerHTML = "Age: " + userAge;
        document.getElementById('hobby').innerHTML = "Hobby: " + userHobby;
        document.getElementById('animal').innerHTML = "Favourite Animal: "  + userAnimal;
        document.getElementById('compliment').innerHTML = "Compliment: " + getCompliment;
    } else {
        alert("Error. Incorrect values or none given.");
        console.log("error. incorrect values")
    }
} */

    // changed to doCompliment to prevent confusion and readability
function doCompliment(){

    let userName = prompt("Tell me your name: ");

    if (userName === ""){
        alert("name not given")
        document.getElementById('error').innerHTML = "no name entered"
        return
    }

    let userAge = parseInt(prompt("Whats your age?"));
    if (userAge === ""){
        alert("no age given")
        document.getElementById('error').innerHTML = "no age entered"
        return
    }

    let userHobby = prompt("Favourite hobby?");
    if (userHobby === ""){
        alert("no hobby given")
        document.getElementById('error').innerHTML = "no hobby stated"
        return
    }

    let userAnimal = prompt("Favourite animal?");
    if (userAnimal === ""){
        alert("no animal given")
        document.getElementById('error').innerHTML = "no favourite animal stated"
        return
    } 

    // alert(getCompliment); 
    console.log(randomCompliment())

    document.getElementById('name').innerHTML = "Name: " + userName;
    document.getElementById('age').innerHTML = "Age: " + userAge;
    document.getElementById('hobby').innerHTML = "Hobby: " + userHobby;
    document.getElementById('animal').innerHTML = "Favourite Animal: "  + userAnimal;
    document.getElementById('compliment').innerHTML = "Compliment: " + getCompliment;
}

function quickCompliment(){
    alert(randomCompliment())
    console.log(randomCompliment())

}