const check1 = document.getElementById("check");
const one = document.getElementById("first");
const two = document.getElementById("second");
const three = document.getElementById("third");
const output = document.querySelector(".output")
const img = document.querySelector(".img")





check1.addEventListener("click", play)




function play(){
    var first = +(one.value);
    var second = +(two.value)
    var third = +(three.value)
    console.log(+(one.value))
  if(first >0 && second >0 && third >0){  


 if(first==second && first==third){
       img.style.transform = "rotate(3600deg)"
       output.innerHTML = `Equilateral`
        
           
    }
 else if(first!=second && first!=third && second!=third){
    img.style.transform = "rotate(1440deg)"
    output.innerHTML = `Scalene`
}

 else if( first==second || first==third || third==second){
    img.style.transform = "rotate(2160deg)"
    output.innerHTML = `Isosceles`

}
  }

else {
    img.style.transform = "rotate(720deg)"
    output.innerHTML = `Invalid Triangle`
 
}


}


