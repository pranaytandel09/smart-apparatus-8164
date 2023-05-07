let amountDisplay = document.getElementById("amountDisplay");
let checkValue = document.getElementById("checkValue");
let checkName = document.getElementById("checkName");
let checkUniversity = document.getElementById("checkUniversity");
let checkPayinfo = document.getElementById("checkPayinfo");
let transactionAmount = document.getElementById("transactionAmount");
let transactionFees = document.getElementById("transactionFees");

let universityData = JSON.parse(localStorage.getItem("university-data")) || [];
let data = universityData[universityData.length - 1];
console.log(data.payInfo.join(","));

checkValue.textContent = `${data.currencyName} ${data.amount}`;
// checkName.textContent = data.userName;
checkUniversity.textContent = `${data.recevierName}`;
checkPayinfo.textContent = data.payInfo.join(",");
transactionAmount.textContent = `${data.currencyName} ${data.amount}`;
let charges = Math.floor(Math.random() * 40);
transactionFees.textContent = `${data.currencyName} ${charges}`;

let userName=data.userName;
let receiverName=data.recevierName;
let currencyName=data.currencyName;
let convertedAmount=data.amount;
let charge=charges;
let originalAmount=data.originalAmount;
let total= Number(convertedAmount)+charge;
let obj={
    userName,
    receiverName,
    currencyName,
    convertedAmount,
    originalAmount,
    charge,
    total
}

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
			document.getElementById("alert").classList.add("show");
			setTimeout(hideAlert, 3000);
		}
		function hideAlert(){
			document.getElementById("alert").classList.remove("show");
			document.getElementById("alert").classList.add("hide");
			setTimeout(function() {
				document.getElementById("alert").classList.remove("hide");
			}, 2000);
            let balacneData=localStorage.getItem('balance-data')
            balacneData-=originalAmount;
            localStorage.setItem('balance-data',balacneData)
            window.location.href="Homepage.html"
		}
      } else {
        alert("Password is incorrect!");
      }
      password = "";
      passwordInput.value = "";
    }
  });
});
let universityTransaction=JSON.parse(localStorage.getItem('university-transaction'))||[];
// console.log(obj)
universityTransaction.push(obj);
localStorage.setItem('university-transaction',JSON.stringify(universityTransaction))