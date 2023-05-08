let amountDisplay = document.getElementById("amountDisplay");
let checkValue = document.getElementById("checkValue");
let checkName = document.getElementById("checkName");
let checkUniversity = document.getElementById("checkUniversity");
let checkPayinfo = document.getElementById("checkPayinfo");
let transactionAmount = document.getElementById("transactionAmount");
let transactionFees = document.getElementById("transactionFees");

let universityData = JSON.parse(localStorage.getItem("university-data")) || [];
let data = universityData[universityData.length - 1];
// toCountry,
//     fromCountry,
//     from_Currency,
//     to_Currency,
//     recevierName,
//     payInfo,
console.log(data.payInfo.join(","));
let fromCountry=data.fromCountry;
checkValue.textContent = `${data.toCountry} ${data.to_Currency}`;
// checkName.textContent = data.userName;
checkUniversity.textContent = `${data.recevierName}`;
checkPayinfo.textContent = data.payInfo.join(",");
transactionAmount.textContent = `${data.toCountry} ${data.to_Currency}`;
let charges = Math.floor(Math.random() * 10);
transactionFees.textContent = `${fromCountry} ${charges}`;

let recepientName=data.recevierName;
let fromCurrencyName=data.fromCountry;
let sentAmount= Number(data.to_Currency);
let debitableAmount= Number(data.from_Currency)+Number(charges);
let toCurrencyName=data.toCountry;
// let total= Number(convertedAmount)+charge;
let obj={
  debitableAmount,    
    fromCurrencyName,
    recepientName,
    sentAmount,
    toCurrencyName
}
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let submitBtn2 = document.getElementById("submitBtn2");
submitBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  box3.style.display='block'
});

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
        showAlert()
        function showAlert() {
          box2.style.display='none';
          box3.style.display='none'
			document.getElementById("alert").classList.add("show");
			setTimeout(hideAlert, 4000);
		}
		function hideAlert(){
			document.getElementById("alert").classList.remove("show");
			document.getElementById("alert").classList.add("hide");
			setTimeout(function() {
				document.getElementById("alert").classList.remove("hide");
			}, 2000);
            window.location.href="Homepage.html";
		}
      } else {
        alert("Password is incorrect!");
      }
      password = "";
      passwordInput.value = "";
    }
  });
});

console.log(obj)

let transactionDetails= JSON.parse(localStorage.getItem("transaction")) ||[];
transactionDetails.push(obj);
localStorage.setItem('transaction',JSON.stringify(transactionDetails))