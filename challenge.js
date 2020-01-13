
document.addEventListener("DOMContentLoaded", function(){
    let heart = document.querySelector("#heart")
    let counter = document.querySelector("#counter")
    let pause = document.querySelector("#pause")
    let plus = document.querySelector("#plus")
    let minus = document.querySelector("#minus")
    let like = document.querySelector(".likes")
    let form = document.querySelector("#comment-form")
    let intervalCount = setInterval(increment, 1000)


    function increment(){ 
        let counterText = counter.textContent
        let counterNumber = parseInt(counterText)
        counterNumber +=1
        counter.textContent = counterNumber 
        
    };

     function startCounter(){
        counter.intervalCount
     };
    
      
       pause.addEventListener("click", function(e){
        
        e.preventDefault()
        if (pause.innerText === "pause"){
        pause.innerText = "resume"
           
        clearInterval(intervalCount) //this clears the variable of intervalCount
                                     //that we made above globally, so..
        }
       else if (pause.innerText === "resume") {
        
         pause.innerText = "pause"
         intervalCount = setInterval(increment, 1000) // we must re-assign 
         counter.intervalCount                  //intervalCounts properties here
         }
       });
        
          




    form.addEventListener("submit", function(e){
        e.preventDefault()
        let name = document.querySelector('input[name="comment"]').value 

        let p = document.createElement("p")
        p.innerText = `${name}`

        document.querySelector("#list").appendChild(p)
    });
    

    heart.addEventListener("click", function(e){
        e.preventDefault()
        let var2 = counter.textContent
       
        
        let existingElement = document.getElementById(var2)

        
        if (existingElement!=null){ //if it exists, take the like value, increment, and set as inner text
            
            let numberOfLikes = Number(existingElement.innerText.split(' ')[4]) + 1
              
            existingElement.innerText = `${var2} has been liked ${numberOfLikes} times.`
        }
        else {  //if it doesnt exist, set the likes as 1
            let li = document.createElement("li")
            li.id = var2
            li.innerText = `${var2} has been liked 1 times.`
            document.querySelector(".likes").appendChild(li)
        
        }
    });


    plus.addEventListener("click", function(e){
        e.preventDefault()
        let var3 = counter.textContent
        let newVar3 = parseInt(var3)
        newVar3 +=1
        counter.textContent = newVar3;

    })

    minus.addEventListener("click", function(e){
        e.preventDefault()
        let var4 = counter.textContent
        let newVar4 = parseInt(var4)
        newVar4 -= 1
        counter.textContent = newVar4;

        
    })

  startCounter();
})