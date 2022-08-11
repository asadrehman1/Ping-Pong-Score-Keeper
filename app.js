const p1btn = document.querySelector("#p1btn");
const sp1 = document.querySelector("#sp1");
const p2btn = document.querySelector("#p2btn");
const sp2 = document.querySelector("#sp2");
const reset = document.querySelector("#reset");
const select = document.querySelector("#playto")

let count1=0;
let count2=0;
let isGameOver=false;

p1btn.addEventListener("click",function(){
    if(!isGameOver){
            count1++;
            sp1.innerText=count1;
         if(count1===parseInt(select.value)){
            isGameOver=true;
            sp1.style.color="green";
            sp2.style.color="red";
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
    }
    
})

p2btn.addEventListener("click",function(){
    if(!isGameOver){
            count2++;
            sp2.innerText=count2;
        
     if(count2===parseInt(select.value)){
            isGameOver=true;
            sp1.style.color="red";
            sp2.style.color="green";
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
    }
    
})

reset.addEventListener("click",resetFunc)
select.addEventListener("change",function(){
    resetFunc();
})

function resetFunc(){
    isGameOver=false;
    count1=0;
    count2=0;
    sp1.innerText=count1;
    sp2.innerText=count2;
    sp1.style.color="";
    sp2.style.color="";
    p1btn.disabled=false;
    p2btn.disabled=false;
}