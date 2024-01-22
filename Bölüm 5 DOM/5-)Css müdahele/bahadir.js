

// const baslik =document.querySelector("h1");
// console.log(baslik.style);

// baslik.style.padding="50px";
// baslik.style.fontSize="60px";
// baslik.style.fontWeight="bold";

// const icerik = document.querySelector("p");
// console.log(icerik.classList);
// icerik.classList.add("bahadir");
// icerik.classList.remove("error");



const pDegeri=document.querySelectorAll('p');

pDegeri.forEach(can => {
    if(can.textContent.includes('error'))
    {
        can.classList.add=('error');
    }
    if(can.textContent.includes('success'))
    {
        can.classList.add=('success');      
    }
});