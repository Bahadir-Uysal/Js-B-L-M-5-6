
const username = "canboz1";
const pattern =/^[a-z]{6,10}$/;
let sonuc = pattern.test(username);
// console.log(sonuc);

if(sonuc)
{
    console.log("başarılı");
}
else
{
    console.log("başarısız");
}