function randomNum() {
       return Math. floor (Math.random () * 100)
       };
       const foo = randomNum ()
       let rockBtn = document.getElementById("Rock!");
       let paperBtn = document.getElementById("Paper!")
       let scissorsBtn = document.getElementById("Scissors!")

      
       
       function choiceForRock() {
              if (randomNum() <= 33) {
                     console.log("Rock!")
                     alert("Computer Chose Rock! Draw!") }
              else if (randomNum() >= 34 && randomNum()<= 66) {
                     console.log("Paper!")
                     alert("Computer Chose Paper! You Lose!")}
              else { (randomNum()>= 67) 
                     console.log("Scissors!")
                     alert("Computer Chose Scissors! You Win!")
              
              }}
              rockBtn.addEventListener("click", () => {
                     choiceForRock() 
                     }
              )

        function choiceForPaper() {
                 if (randomNum() <= 33) {
                     console.log("Rock!")
                       alert("Computer Chose Rock! You Win!") }
                  else if (randomNum() >= 34 && randomNum()<= 66) {
                        console.log("Paper!")
                     alert("Computer Chose Paper! Draw!")}
                  else { (randomNum()>= 67) 
                           console.log("Scissors!")
                         alert("Computer Chose Scissors! You Lose!")
                     
                    }}
                    paperBtn.addEventListener("click", () => {
                           choiceForPaper() 
                           }
                    )
         function choiceForScissors() {
                 if (randomNum() <= 33) {
                         console.log("Rock!")
                         alert("Computer Chose Rock! You Lose!") }
                  else if (randomNum() >= 34 && randomNum()<= 66) {
                         console.log("Paper!")
                      alert("Computer Chose Paper! You Win!")}
                  else { (randomNum()>= 67) 
                          console.log("Scissors!")
                        alert("Computer Chose Scissors! Draw!")
                     
                    }}
                   scissorsBtn.addEventListener("click", () => {
                           choiceForScissors() 
                           }
                    )
 