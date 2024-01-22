const kutu = document.querySelector(".kutu");
kutu.addEventListener("mousemove",e=>{
    // console.log(e);
    // console.log(e.offSetX,e.offSetY);
    kutu.textContent=`x koordinati ${e.offSetX}, y koordinati ${e.offSetY}`
})




document.addEventListener("wheel",e=>{
    console.log(e.pageX,e.pageY);
})