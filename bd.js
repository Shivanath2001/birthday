const popup=document.querySelector(".click")
const header=document.querySelector("header")
const pop1=document.querySelectorAll(".popup")

console.log(pop1);
console.log(header);
// console.log(popup);
// console.log(pop1.style.visibility="invisible");
popup.addEventListener("click",()=>{
    for(let i=0;i<=pop1.length-1;i++){
        if(pop1[i].style.visibility==="visible"){
        pop1[i].style.visibility="hidden"
    //    const vanish= pop1[i].className="inclick";
       const vanish1= pop1[i].id=" "
       console.log(pop1[i]);
    //    console.log(pop1[i]);
    //    console.log(pop1[i]);
    }else{
       pop1[i].className="popup";
        pop1[i].className +=" as";
        pop1[i].style.visibility="visible";
        console.log(pop1[i].style.visibility);
        for(let i=0;i<=pop1.length-1;i++){
        const vanish1= pop1[i].id=`img${i+1}`
    console.log(i+1,"=");
    }
        // const vanish2= pop1[i].id="img2"
        // const vanish3= pop1[i].id="img3"
        // const vanish4= pop1[i].id="img4"
        console.log(pop1[i]); 
        console.log(i); 
       
       
    }
  }
})