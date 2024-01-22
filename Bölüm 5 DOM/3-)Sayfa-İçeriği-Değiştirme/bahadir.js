// const pdegeri = document.querySelector("p");
// console.log(pdegeri);

// pdegeri.innerText = "can boz"

// const pdegeri = document.querySelectorAll("p");
// pdegeri.forEach(a=> {
//     console.log(a.innerText);
//     a.innerText+="  yeni alan"
// });

const icerik = document.querySelector(".icerik");
console.log(icerik.innerHTML);
// icerik.innerHTML += "<h2>Vue JS, React JS, Anguler JS </h2>";

const ogrenciler = ["can","tuba","elif"];
ogrenciler.forEach(x=>{
    icerik.innerHTML+=`<p>${x}</p>`
})