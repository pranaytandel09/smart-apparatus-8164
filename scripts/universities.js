let receving = document.getElementById("receving");
let university = document.getElementById("university");

let userData = JSON.parse(localStorage.getItem("user-data")) || [];
let universityData = JSON.parse(localStorage.getItem("university-data")) || [];
let recevierName=null;
let amount=null;
let payInfo=[];
university.addEventListener("change", function () {
  receving.innerText = `${university.value} receives`;
  recevierName=university.value;
});

let userName = userData[userData.length - 1].name;

let checkbox1=document.getElementById('checkbox1');
let checkbox2=document.getElementById('checkbox2');
let checkbox3=document.getElementById('checkbox3');
let checkbox4=document.getElementById('checkbox4');


checkbox1.addEventListener('change',function(){
    if (this.checked) {
        payInfo.push(checkbox1.value)
        console.log(checkbox1.value);
      } 
})
checkbox2.addEventListener('change',function(){
    if (this.checked) {
        payInfo.push(checkbox2.value)
        console.log(checkbox2.value);
      } 
})
checkbox3.addEventListener('change',function(){
    if (this.checked) {
        payInfo.push(checkbox3.value)
        console.log(checkbox3.value);
      } 
})
checkbox4.addEventListener('change',function(){
    if (this.checked) {
        payInfo.push(checkbox4.value)
        console.log(checkbox4.value);
      } 
})

let currencyRateData = [];

let fromCountries = document.getElementById("fromCountries");
let toCountries = document.getElementById("toCountries");
let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let currency = document.getElementById("currency");

fetchCurrancyRate();

function fetchCurrancyRate() {
  fetch("https://mock-server-fw26-217-tz58.onrender.com/Contries")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderCountries(data);
      currencyRateData = data;
    })
    .catch((err) => console.log(err));
}

function renderCountries(data) {
  fromCountries.innerHTML = "";
  toCountries.innerHTML = "";
  data.forEach(function (el) {
    // console.log(el)
    let optn = document.createElement("option");
    optn.value = el.name;

    let optn2 = document.createElement("option");
    optn2.value = el.name;

    let img = document.createElement("img");
    img.src = el.image;
    img.class = "countryImg";
    optn.innerText = el.name;
    optn2.innerText = el.name;
    toCountries.append(optn2);
    fromCountries.append(optn);
  });
}
currency.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputRate = currencyRate(fromCountries.value);
  let outputRate = currencyRate(toCountries.value);
  let inputValue = currency.fromCurrency.value;

  let result = (outputRate / inputRate) * inputValue;
  currency.toCurrency.value = Math.ceil(result);

  //  let bankDetails=document.getElementById("bankDetails");
  //  bankDetails.Amount.value=toCurrency.value;
  amount = toCurrency.value;  
});

function currencyRate(a) {
  let value = "";
  currencyRateData.forEach(function (e) {
    if (e.name == a) {
      value = e.rate;
    }
  });
  return value;
}
let nextPage=document.getElementById('nextPage');
nextPage.addEventListener('click',function(){
    let obj={
        userName,
        recevierName,
        amount,
        payInfo
    }
    universityData.push(obj);
    localStorage.setItem('university-data',JSON.stringify(universityData))
})