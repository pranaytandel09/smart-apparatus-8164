// catching payment Option method by img and anchor tag

let optionLogo1= document.getElementById("optionLogo1")
let optn1= document.getElementById("optn1")

let optionLogo2= document.getElementById("optionLogo2")
let optn2= document.getElementById("optn2")

let optionLogo3= document.getElementById("optionLogo3")
let optn3= document.getElementById("optn3")

// catching all containers from dynamicbox and dynamicbox itself
let dynamicBox=document.getElementById("dynamicBox")
let box1= document.getElementById("box1")
let box2= document.getElementById("box2")
let box3= document.getElementById("box3")
let box4= document.getElementById("box4")

//box1 elements
let submitBtn1= document.getElementById("submitBtn1")

//box2 elements
let submitBtn2= document.getElementById("submitBtn2")

//box3 element
let backBtn= document.getElementById("backBtn")


optionLogo1.addEventListener("click",function(){
    dynamicBox.style.display="block";
    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
})
optn1.addEventListener("click",function(e){
    e.preventDefault()
    dynamicBox.style.display="block";
    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
})
optionLogo2.addEventListener("click",function(){
    console.log("YESSS")
    dynamicBox.style.display="none";
    fetchBeneficiaryData()
})
optn2.addEventListener("click",function(e){
    console.log("YESSS")
    e.preventDefault()
    dynamicBox.style.display="none";
    fetchBeneficiaryData()
})
// submitBtn1.addEventListener("click",function(e){
// e.preventDefault();

// })
submitBtn2.addEventListener("click",function(e){
    e.preventDefault();
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="block";
    box4.style.display="none";
    })

    function showCase(){
        box1.style.display="none";
        box2.style.display="none";
        box3.style.display="none";
        box4.style.display="block";
    }

    backBtn.addEventListener("click",function(){
        box1.style.display="block";
        box2.style.display="none";
        box3.style.display="none";
        box4.style.display="none";
    })



const passwordInput = document.getElementById("password");
const passwordButtons = document.querySelectorAll(".password-button");


let password = "";

passwordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("backspace")) {
      password = password.slice(0, -1);
    } else {
      password += button.textContent;
    }

    passwordInput.value = password;

    if (password.length === 4) {
      if (password === "5872") {
      showCase()
      } else {
        alert("Password is incorrect!");
      }

      password = "";
      passwordInput.value = "";
    }
  });
});
// Currency exchange------------------------------->

let currencyRateData=[]

let fromCountries= document.getElementById("fromCountries");
let toCountries= document.getElementById("toCountries")
let fromCurrency= document.getElementById("fromCurrency")
let toCurrency= document.getElementById("toCurrency");
let currency=document.getElementById("currency");

fetchCurrancyRate();

function fetchCurrancyRate(){

  fetch("https://mock-server-fw26-217-tz58.onrender.com/Contries")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
  renderCountries(data)
  currencyRateData=data;
  })
  .catch((err)=>console.log(err))
}

function  renderCountries(data){
  fromCountries.innerHTML="";
  toCountries.innerHTML="";
  data.forEach(function(el){
// console.log(el)
let optn= document.createElement("option");
optn.value= el.name;

let optn2= document.createElement("option");
optn2.value= el.name;

let img= document.createElement("img")
img.src= el.image;
img.class= "countryImg";
optn.innerText= el.name
optn2.innerText= el.name




toCountries.append(optn2)
fromCountries.append(optn)
  })
}

currency.addEventListener("submit",function(e){
  e.preventDefault()
   let inputRate=currencyRate(fromCountries.value)
   let outputRate=currencyRate(toCountries.value)
   let inputValue= currency.fromCurrency.value;
 
let result=(outputRate / inputRate)*inputValue;
   currency.toCurrency.value= Math.ceil(result);

   let bankDetails=document.getElementById("bankDetails");
   bankDetails.Amount.value=toCurrency.value;
  })

  function currencyRate(a){
   let value= "";
   currencyRateData.forEach(function(e){
 
      if(e.name==a){
       value= e.rate;
      }
    })
  return(value)
  }

// Get the "from" and "to" country select elements



// let fromCountries = document.getElementById("fromCountries");
// let toCountries = document.getElementById("toCountries");

// // Call the fetchCurrancyRate function to fetch data and render the country options
// fetchCurrancyRate();

// function fetchCurrancyRate() {
//   fetch("https://mock-server-fw26-217-tz58.onrender.com/Contries")
//     .then((res) => res.json())
//     .then((data) => {
//       renderCountries(data);
//     })
//     .catch((err) => console.log(err));
// }

// function renderCountries(data) {
//   // Clear the select options first
//   fromCountries.innerHTML = "";
//   toCountries.innerHTML = "";

//   // Loop through the data and add options to the "from" and "to" country selects
//   data.forEach(function (country) {
//     // console.log(country)
//     // Create a new option element with the country name as the text content
//     let option = document.createElement("option");
//     option.text = country.name;
//     option.value = country.name;
// option.style.backgroundImage=`url(${country.img})`
//     // Create a new image element with the country flag image source
//     let img = document.createElement("img");
//     img.src = country.image;
//     img.className = "countryImg";

//     // Append the image to the option element
//     option.appendChild(img);

//     // Add the option to the "from" and "to" country selects
//     fromCountries.appendChild(option.cloneNode(true));
//     toCountries.appendChild(option);
//   });


//   console.log($('#fromCountries'));
// $('#fromCountries').select2();

//   // Initialize the select2 plugin on the "from" and "to" country selects
//   $("#fromCountries, #toCountries").select2({
//     templateResult: function (result) {
//       if (!result.id) {
//         return "";
//       }
//       var $div = $('<div class="country-option">');
//       var $img = $('<img>');
//       $img.attr('src', result.element.dataset.image);
//       $img.addClass('country-img');
//       $div.append($img);
//       $div.append(result.text);
//       return $div;
//     },
//     dropdownCssClass: 'country-dropdown',
//     minimumResultsForSearch: Infinity
//   });
// }


// // sending money to benificary
// // Replace this with the URL of your API endpoint
// const API_URL = "https://reqres.in/api/users";

// // Get the beneficiary select element and the beneficiary list div
// const beneficiarySelect = document.getElementById("beneficiary");
// const beneficiaryList = document.getElementById("beneficiaryList");

// // Fetch the beneficiary data from the API
// function fetchBeneficiaryData(){


// }
// ____________________________________________________________________________________________


// bankDetails form submission------------------------>

// Tickmark Animation ------------------------------>
function animationTickmark() {
  const tickAnimation = document.getElementById("tickAnimation");
  tickAnimation.classList.add("show");
}

document.addEventListener("DOMContentLoaded", animationTickmark);

// -------------------------------------------------------->


let transactionDetails= JSON.parse(localStorage.getItem("transaction")) || []
let bankDetails=document.getElementById("bankDetails");

bankDetails.addEventListener("submit",function(e){
  e.preventDefault();
 
if(bankDetails.bankName.value=="" || bankDetails.accNo.value=="" || bankDetails.recipientName.value==""){
  alert("Enter All Feilds")
}
else{
  let obj={};

  obj.currencyName=toCountries.value;
  
  let randomValue=Math.floor(Math.random()*40)
  obj.amount= bankDetails.Amount.value;
  obj.bankName=bankDetails.bankName.value;
  obj.accNo= bankDetails.accNo.value;
  obj.recipientName= bankDetails.recipientName.value;
obj.charges= randomValue;
obj.total= Number(bankDetails.Amount.value) + randomValue;

  box1.style.display="none";
box2.style.display="block";
box3.style.display="none";
box4.style.display="none";
console.log(obj)
transactionDetails.push(obj)
localStorage.setItem("transaction",JSON.stringify(transactionDetails))

tansactionCheck(obj)
}
  
})

// Review your transaction details section

let amountDisplay= document.getElementById("amountDisplay")
let checkValue= document.getElementById("checkValue")
let checkName=document.getElementById("checkName")
let checkBank= document.getElementById("checkBank")
let transactionAmount=document.getElementById("transactionAmount")
let transactionFees=document.getElementById("transactionFees")

let checkValue2= document.getElementById("checkValue2")
let checkName2=document.getElementById("checkName2")
let checkBank2= document.getElementById("checkBank2")
let transactionAmount2=document.getElementById("transactionAmount2")
let transactionFees2=document.getElementById("transactionFees2")

function tansactionCheck(obj){

 
  checkValue.innerText=`${obj.currencyName} ${obj.total}` 
  checkName.innerText=`${obj.recipientName}`
  checkBank.innerText=`${obj.bankName} | ${obj.accNo}` 

  transactionAmount.innerText=`${obj.currencyName} ${(obj.amount)}`;
  transactionFees.innerText=`${obj.currencyName} ${obj.charges}`;

   
  checkValue2.innerText=`${obj.currencyName} ${obj.total}` 
  checkName2.innerText=`${obj.recipientName}`
  checkBank2.innerText=`${obj.bankName} | ${obj.accNo}` 

  transactionAmount2.innerText=`${obj.currencyName} ${(obj.amount)}`;
  transactionFees2.innerText=`${obj.currencyName} ${obj.charges}`;
}