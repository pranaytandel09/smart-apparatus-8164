
let transactionDetails= JSON.parse(localStorage.getItem("transaction")) || []
// let transactionDetails2= JSON.parse(localStorage.getItem("transaction2")) || []

// catching payment Option method by img and anchor tag

let optionLogo1= document.getElementById("optionLogo1")
let optn1= document.getElementById("optn1")

// let optionLogo2= document.getElementById("optionLogo2")
// let optn2= document.getElementById("optn2")

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
    dynamicBox1.style.display="none";
    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
})
optn1.addEventListener("click",function(e){
    e.preventDefault()
    dynamicBox.style.display="block";
    dynamicBox1.style.display="none";
    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
})
// optionLogo2.addEventListener("click",function(){
//     console.log("YESSS")
//     dynamicBox.style.display="none";
//     fetchBeneficiaryData()
// })
// optn2.addEventListener("click",function(e){
//     console.log("YESSS")
//     e.preventDefault()
//     dynamicBox.style.display="none";
//     fetchBeneficiaryData()
// })
// submitBtn1.addEventListener("click",function(e){
// e.preventDefault();

// })
submitBtn2.addEventListener("click",function(e){
    e.preventDefault();
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="block";
    box4.style.display="none";


    let transactionDetails= JSON.parse(localStorage.getItem("transaction")) || []


    transactionDetails.push(transactionObj)
    localStorage.setItem("transaction",JSON.stringify(transactionDetails))
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
//         transactionDetails1.push(transactionObj)
//  localStorage.setItem("transaction1",JSON.stringify(transactionDetails1))
      showCase();
      animationTickmark();
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
    // console.log(data)
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

// document.addEventListener("DOMContentLoaded", animationTickmark);

// -------------------------------------------------------->


let transactionObj={};

let bankDetails=document.getElementById("bankDetails");

bankDetails.addEventListener("submit",function(e){
  e.preventDefault();
 
if(bankDetails.bankName.value=="" || bankDetails.accNo.value=="" || bankDetails.recipientName.value==""){
  alert("Enter All Feilds")
}
else{
  let randomValue=Math.floor(Math.random()*10)
  let obj={};
obj.fromCurrencyName=fromCountries.value;
  obj.toCurrencyName=toCountries.value;
  obj.debitableAmount= Number(fromCurrency.value)+randomValue;
  
  obj.amount= bankDetails.Amount.value;
  obj.bankName=bankDetails.bankName.value;
  obj.accNo= bankDetails.accNo.value;
  obj.recipientName= bankDetails.recipientName.value;
obj.charges= randomValue;
// obj.total= Number(bankDetails.Amount.value) ;
// console.log(obj);

// creation of transaction object which is going to be added in LS---------------------------
transactionObj.debitableAmount=Number(fromCurrency.value)+randomValue;
transactionObj.fromCurrencyName=fromCountries.value;;
transactionObj.sentAmount=Number(bankDetails.Amount.value);
transactionObj.toCurrencyName=toCountries.value;
transactionObj.recepientName=bankDetails.recipientName.value;
console.log(transactionObj);

// -----------------------------------------------------------------------------------------------

  box1.style.display="none";
box2.style.display="block";
box3.style.display="none";
box4.style.display="none";
console.log(obj)





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
let debitable= document.getElementById("debitable");

let checkValue2= document.getElementById("checkValue2")
let checkName2=document.getElementById("checkName2")
let checkBank2= document.getElementById("checkBank2")
// let transactionAmount2=document.getElementById("transactionAmount2")
// let transactionFees2=document.getElementById("transactionFees2")

function tansactionCheck(obj){

 
  checkValue.innerText=`${obj.toCurrencyName} ${obj.amount}` 
  checkName.innerText=`${obj.recipientName}`
  checkBank.innerText=`${obj.bankName} | ${obj.accNo}` 

  transactionAmount.innerText=`${obj.toCurrencyName} ${(obj.amount)}`;
  transactionFees.innerText=`${obj.fromCurrencyName} ${obj.charges}`;
  debitable.innerText=`${obj.fromCurrencyName} ${obj.debitableAmount}`
   
  checkValue2.innerText=`${obj.toCurrencyName} ${obj.amount}` 
  checkName2.innerText=`${obj.recipientName}`
  checkBank2.innerText=`${obj.bankName} | ${obj.accNo}` 

  // transactionAmount2.innerText=`${obj.currencyName} ${(obj.amount)}`;
  // transactionFees2.innerText=`${obj.currencyName} ${obj.charges}`;
}

// payment option-----> using rupay tag------------------------------------------
// step 1
let dynamicBox1=document.getElementById("dynamicBox1")
let cardBox= document.getElementById("cardBox")

optn3.addEventListener("click",function(e){
  e.preventDefault()
  console.log("Option3")
  dynamicBox.style.display="none";
  dynamicBox1.style.display="block";
  cardBox.style.display="block";
  selectedCard.style.display="none";
  selectedUserBox3.style.display="none";
  selectedUserBox4.style.display="none";
  fetchCardData()
})
optionLogo3.addEventListener("click",function(){
console.log("Option3")
  dynamicBox.style.display="none";
  dynamicBox1.style.display="block";
  cardBox.style.display="block"

  selectedCard.style.display="none";
  selectedUserBox3.style.display="none";
  selectedUserBox4.style.display="none";
  fetchCardData()
})

// fetching the data----------------------->
function fetchCardData(){

  fetch("https://mock-server-0092.onrender.com/users")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    renderCardData(data)
  })
  .catch((err)=>console.log(err))
}

// rendering data in cardBox---------------->
function  renderCardData(data){
  cardBox.innerHTML="";

data.forEach(function(el){

  cardBox.append(createCard(el))
})
}

function createCard(el){
  let card= document.createElement("div");
  card.className= "card";

  let cardImg= document.createElement("div");
  cardImg.className="cardImg";

  let img=document.createElement("img")
  img.className="image";
  img.src=el.avatar;
  cardImg.append(img);

  let userCardInfo= document.createElement("div");
  userCardInfo.className="userCardInfo";

  let userCardname= document.createElement("h2")
  userCardname.className="userCardname";
  userCardname.innerText=`${el.first_name} ${el.last_name}`;


  let userCardId= document.createElement("p")
  userCardId.className="userCardId";

  let anchorTag= document.createElement("a");
  anchorTag.innerText=`${el.first_name}@₹Pay`;

anchorTag.addEventListener("click",function(){

  cardBox.style.display="none";
  selectedCard.style.display="block";
  selectedUserBox3.style.display="none";
  selectedUserBox4.style.display="none";

  displaySelectedCard()
  selectedCardPayment(el);
  fetchCurrancyRate2();
})

  userCardId.append(anchorTag)

  userCardInfo.append(userCardname,userCardId);

card.append(cardImg,userCardInfo)
return card;
}

// step2 of pay using anchorTag segment
let selectedCardObject={};
let selectedCard= document.getElementById("selectedCard")
let selectedUserInfo= document.getElementById("selectedUserInfo")
let selectedUserInfo2= document.getElementById("selectedUserInfo2")
function displaySelectedCard(){
  cardBox.style.display="none";
  selectedCard.style.display="block";

}

function selectedCardPayment(el){
  selectedUserInfo.innerHTML=""
  selectedUserInfo2.innerHTML=""

 let selectedUserImg= document.createElement("img")
 selectedUserImg.className= "selectedUserInfoImg";
 selectedUserImg.src=el.avatar;

 let selectedUserImg2= document.createElement("img")
 selectedUserImg2.className= "selectedUserInfoImg";
 selectedUserImg2.src=el.avatar;

 let selectedUserUsername= document.createElement("h2")
 selectedUserUsername.className="selectedUserUsername"
 selectedUserUsername.innerText=`${el.first_name} ${el.last_name}`

 let selectedUserUsername2= document.createElement("h2")
 selectedUserUsername2.className="selectedUserUsername"
 selectedUserUsername2.innerText=`${el.first_name} ${el.last_name}`

 let selectedUserId= document.createElement("h4")
 selectedUserId.className=("selectedUserId")
 selectedUserId.innerText=`${el.first_name}@₹Pay`

 let selectedUserId2= document.createElement("h4")
 selectedUserId2.className=("selectedUserId")
 selectedUserId2.innerText=`${el.first_name}@₹Pay`

 let displayMoney= document.createElement("h3");
 displayMoney.id="displayMoney";

 let displayMoney2= document.createElement("h3");
 displayMoney2.id="displayMoney2";

 let payment= document.createElement("button")
 payment.id="paymentBtn";
 payment.innerText="Pay";

payment.addEventListener("click",function(){
  cardBox.style.display="none";
  selectedCard.style.display="none";
  selectedUserBox3.style.display="block";
  selectedUserBox4.style.display="none";

  selectedUserPass()
  createSelectedUserObject(el)

  

let transactionDetails= JSON.parse(localStorage.getItem("transaction")) || []

  transactionDetails.push(selectedCardObject)
  localStorage.setItem("transaction",JSON.stringify(transactionDetails));
})

let paymentConfermation= document.createElement("h5")
paymentConfermation.innerText="Payment Done!"

 selectedUserInfo.append(selectedUserImg,selectedUserUsername,selectedUserId,displayMoney,payment)
 selectedUserInfo2.append(selectedUserImg2,selectedUserUsername2,selectedUserId2,displayMoney2,paymentConfermation)
}

// object creation -------------------------->
// let transactionDetails= JSON.parse(localStorage.getItem("transaction")) || []

function  createSelectedUserObject(el){

  selectedCardObject.recepientName=`${el.first_name} ${el.last_name}`;
 
}






// --------------------------------------------------->

// currency exchange part-----------------------
let currencyRateData2=[]

let selectedUserFromCountries= document.getElementById("selectedUserFromCountries");
let selectedUserToCountries= document.getElementById("selectedUserToCountries")
let selectedUserFromCurrency= document.getElementById("selectedUserFromCurrency")
let selectedUserToCurrency= document.getElementById("selectedUserToCurrency");
let selectedUserCurrency=document.getElementById("selectedUserCurrency");



function fetchCurrancyRate2(){

  fetch("https://mock-server-fw26-217-tz58.onrender.com/Contries")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
  renderCountries2(data)
  currencyRateData2=data;
  })
  .catch((err)=>console.log(err))
}

function  renderCountries2(data){
  selectedUserFromCountries.innerHTML="";
  selectedUserToCountries.innerHTML="";
  data.forEach(function(el){
// console.log(el)
let optn= document.createElement("option");
optn.value= el.name;

let optn2= document.createElement("option");
optn2.value= el.name;

// let img= document.createElement("img")
// img.src= el.image;
// img.class= "countryImg";
optn.innerText= el.name
optn2.innerText= el.name




selectedUserToCountries.append(optn2)
selectedUserFromCountries.append(optn)
  })
}

selectedUserCurrency.addEventListener("submit",function(e){
  let displayMoney=document.getElementById("displayMoney")
  let displayMoney2=document.getElementById("displayMoney2")
  e.preventDefault()
   let inputRate=currencyRate2(selectedUserFromCountries.value)
   let outputRate=currencyRate2(selectedUserToCountries.value)
   let inputValue= selectedUserCurrency.selectedUserFromCurrency.value;
 
let result=(outputRate / inputRate)*inputValue;
selectedUserCurrency.selectedUserToCurrency.value= Math.ceil(result);
displayMoney.innerText=`${selectedUserToCountries.value} ${Math.ceil(result)}`
displayMoney2.innerText=`${selectedUserToCountries.value} ${Math.ceil(result)}`

//creation of object which will be reflected on LS--------------------------------------------------->

selectedCardObject.debitableAmount=Number(selectedUserFromCurrency.value);
selectedCardObject.fromCurrencyName=selectedUserFromCountries.value;
selectedCardObject.sentAmount=Math.ceil(result);
selectedCardObject.toCurrencyName=selectedUserToCountries.value;

// ----------------------------------------------------------------------------------------------------------------->



  //  let bankDetails=document.getElementById("bankDetails");
  //  bankDetails.Amount.value=toCurrency.value;
  })

  function currencyRate2(a){
   let value= "";
   currencyRateData2.forEach(function(e){
 
      if(e.name==a){
       value= e.rate;
      }
    })
  return(value)
  }

  // password Authentication---------------->

  let selectedUserBox3= document.getElementById("selectedUserBox3")
  // selectedUserBox3.style.display="block";

  let selectedUserBackBtn= document.getElementById("selectedUserBackBtn");
  selectedUserBackBtn.addEventListener("click",function(){
    selectedUserBox3.style.display="none";
    selectedCard.style.display="block";
  })

function selectedUserPass(){


  const passwordInput2 = document.getElementById("password2");
  const passwordButtons2 = document.querySelectorAll(".password-button");
  
  
  let password2 = "";
  
  passwordButtons2.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("backspace")) {
        password2 = password2.slice(0, -1);
      } else {
        password2 += button.textContent;
      }
  
      passwordInput2.value = password2;
  
      if (password2.length === 4) {
        if (password2 === "5872") {
          selectedUserShowCase()
          // console.log(selectedCardObject)
       
          animationTickmark2()

        } else {
          alert("Password is incorrect!");
        }
  
        password2 = "";
        passwordInput2.value = "";
      }
    });
  });
}
 
// -------------------------------------------------------------->

let selectedUserBox4= document.getElementById("selectedUserBox4")
function selectedUserShowCase(){
  cardBox.style.display="none";
  selectedCard.style.display="none";

  selectedUserBox3.style.display="none";
  selectedUserBox4.style.display="block"
}

function animationTickmark2() {
  const tickAnimation2 = document.getElementById("tickAnimation2");
  tickAnimation2.classList.add("show2");
}

// document.addEventListener("DOMContentLoaded", animationTickmark);

// -------------------------------------------------------->