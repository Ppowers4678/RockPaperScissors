function randomNum() {
       return Math. floor (Math.random () * 100)
       };
       let number = randomNum ()
       let rockBtn = document.getElementById("Rock")
       let paperBtn = document.getElementById("Paper")
       let scissorsBtn = document.getElementById("Scissors")
      
       
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
                 if (number <= 33) {
                         console.log("Rock!")
                         alert("Computer Chose Rock! You Lose!")
                            return "loss" }
                  else if (number >= 34 && number <= 66) {
                         console.log("Paper!")
                      alert("Computer Chose Paper! You Win!")
                            return "win" }
                  else { (number>= 67) 
                          console.log("Scissors!")
                        alert("Computer Chose Scissors! Draw!")
                        return "draw"
                     
                    }}
                   scissorsBtn.addEventListener("click", () => {
                          choiceForScissors()
                             if (number <= 33) {
                                   lossCounter()
                             } else if (number >= 34 && number<=66) {
                                   winCounter()
                             } else {drawCounter() }});
                           
                    
              function lossCounter() {
                     let losses = document.querySelectorAll("loss")
                     let count = losses.length
                     console.log(`You have ${count} losses!`)
                     return count

              }
              function winCounter() {
                     const wins = document.querySelectorAll("win")
                     const count = wins.length
                     console.log( `You have ${count} wins!`)
                     return count
              }
              function drawCounter() {
                     const draws = document.querySelectorAll("draw")
                     const count = draws.length
                     console.log(`You have ${count} draws!`)
                     return count
              }
 