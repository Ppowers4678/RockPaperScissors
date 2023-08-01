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
                     draws.push("draw")
                     drawCounter()
                      }
              else if (randomNum() >= 34 && randomNum()<= 66) {
                     console.log("Paper!")
                     losses.push("loss")
                     lossCounter()}
              else { (randomNum()>= 67) 
                     console.log("Scissors!")
                     wins.push("win")
                     winCounter()
              }}
              rockBtn.addEventListener("click", () => {
                     choiceForRock() 
                     }
              )

        function choiceForPaper() {
                 if (randomNum() <= 33) {
                     console.log("Rock!")
                     wins.push("win")
                     winCounter()}
                  else if (randomNum() >= 34 && randomNum()<= 66) {
                        console.log("Paper!")
                        draws.push("draw")
                        drawCounter()}
                  else { (randomNum()>= 67) 
                           console.log("Scissors!")
                           losses.push("loss")
                           lossCounter()
                    }}
                    paperBtn.addEventListener("click", () => {
                           choiceForPaper() 
                           }
                    )
              const losses = []
              const wins = []
              const draws = []
         function choiceForScissors() {
                 if (randomNum() <= 33) {
                         console.log("Rock!")
                            losses.push("loss")
                            lossCounter()}
                  else if (randomNum() >= 34 && randomNum() <= 66) {
                         console.log("Paper!")
                            wins.push("win")
                            winCounter() }
                  else { (randomNum()>= 67) 
                          console.log("Scissors!")
                        draws.push("draw")
                        drawCounter()
                     }
              
              }
                   scissorsBtn.addEventListener("click", () => {
                          choiceForScissors()
                   })
                    
              function lossCounter() {
                     let count = losses.length
                     document.getElementById("losses").innerHTML= `${count}`
                     return count

              }
              function winCounter() {
                     const count = wins.length
                     document.getElementById("wins").innerHTML= `${count}`
                     return wins
              }
              function drawCounter() {
                     const count = draws.length
                     document.getElementById("draws").innerHTML= `${count}`
                     return count
              }
 