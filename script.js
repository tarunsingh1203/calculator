let boxes = document.querySelectorAll(".box")
let C = document.querySelector("#C")
let result = document.querySelector(".res")
let hide = document.querySelector(".hide")


str = "";

Array.from(boxes).forEach((box)=>{
   box.addEventListener("click", (e)=>{

      try{

      C.disabled = false

      if(e.target.innerHTML == "="){
         str = eval(str)
         result.innerText = str
    
      }
      else if(e.target.innerHTML == "x"){

         str = str + "*"
         result.innerText = str
         
      }
      else if(e.target.innerHTML == "AC"){
         str = ""
         result.innerHTML = "0"
      }
      else if(e.target.innerHTML == "C"){

         count = str.length   //3
         newStr = ""

        for(let i = 0; i < str.length;  i++){
            if(i === (count-1)){
               break
            }
            else{
            newStr = newStr + String(str[i])
   
            }
        }
        str = newStr
        result.innerHTML = str
        if(str == ""){
         result.innerHTML = "0"
         C.disabled = true
        }
      }

      else{
         str = str + e.target.innerHTML //6
         result.innerText = str
      }
   }
   catch(e){
      result.innerText = "error!!"
      str = ""
   }
   })
})

