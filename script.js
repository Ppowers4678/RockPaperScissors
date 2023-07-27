 function randomNum() {
    return Math.floor(Math.random() * 100)
 };
 const foo = randomNum() 

 let button = document.querySelector("button");

 function getComputerChoice() {


    {if (foo <= 33) {
        console.log("Rock!")
 }   else if (foo >= 34 && foo<= 66)  { 
        console.log("Paper!")
 }  else
        console.log("Scissors!")
 }};

 const foo2 = getComputerChoice();

 button.addEventListener("click", foo2);

 