const button = document.querySelector("button");

button.addEventListener("click",() =>{
    console.log("tıklandı");
})


const liElemanlari = document.querySelectorAll("li");

liElemanlari.forEach(elemanlar => {
    elemanlar.addEventListener("click",e=>{

        // console.log(e);
        // console.log(e.target);
        // console.log("liye tiklandi.");
        // e.target.style.color="blue";
    })
});



const ul = document.querySelector("ul");
ul.addEventListener("click",e=>{
    if(e.target.tagName ==='LI')
    {
        e.target.remove();
    }
})

liElemanlari.forEach(elemanlar => {
    elemanlar.addEventListener("click",e=>{

    // e.target.remove();
    })
});


button.addEventListener("click",() =>{
    const li=document.createElement("li");
    li.textContent="JavaScript";
    ul.prepend(li);
})
