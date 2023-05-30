const teclas_numericas = document.querySelectorAll(".tcl")
const teclas_operacao = document.querySelectorAll(".teclas_operacao")
const displaytxt = document.querySelector(".displaytxt")
const n9 = document.querySelector(".n9")
const tecla_res = document.querySelector(".bt_igual")
const tecla_ce = document.querySelector(".bt_ce")
const tecla_ac = document.querySelector(".bt_ac")

console.log(teclas_numericas[0])
console.log(teclas_numericas)
console.log(displaytxt.textContent)

let sinal = false
let decimal = false

teclas_numericas.forEach((el)=>{
   el.addEventListener("click", (evt)=>{
      if(evt.target.dataset.valor == ","){
         if(!decimal){
             decimal = true
             if(displaytxt.innerHTML == "0"){
                 displaytxt.innerHTML = "0,"
             }else{
             displaytxt.innerHTML+=evt.target.dataset.valor
             }
         }
     }else{
         if(displaytxt.innerHTML == "0"){
             displaytxt.innerHTML = ""
         }
             displaytxt.innerHTML+=evt.target.dataset.valor
     }
})
})

teclas_operacao.forEach((el)=>{
   el.addEventListener("click", (evt)=>{
      if(!sinal){
          sinal = true
          if(displaytxt.innerHTML == "0"){
              displaytxt.innerHTML = ""
          }
          if(evt.target.innerHTML == "x"){
              displaytxt.innerHTML+= "*"

          }else{
            displaytxt.innerHTML += evt.target.dataset.valor
          }
       
      }

  })
})

      


tecla_ac.addEventListener("click", (evt)=>{
   sinal = false
   decimal = false
   displaytxt.innerHTML = "0"
})

tecla_ce.addEventListener("click", (evt)=>{
   sinal = false
   decimal = false
   let str = displaytxt.innerHTML
   if(str.length <= 1 ){
      displaytxt.innerHTML = "0"
   }else{
      str = str.substring(0, str.length - 1);
      displaytxt.innerHTML = str
   }
})

tecla_res.addEventListener("click", (evt)=>{
   const res = eval(displaytxt.innerHTML)
   displaytxt.innerHTML = res
})


