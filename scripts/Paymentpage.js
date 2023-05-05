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
submitBtn1.addEventListener("click",function(e){
e.preventDefault();
box1.style.display="none";
box2.style.display="block";
box3.style.display="none";
box4.style.display="none";
})
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


// Tickmark Animation ------------------------------>
function animationTickmark() {
    const tickAnimation = document.getElementById("tickAnimation");
    tickAnimation.classList.add("show");
  }
  
  document.addEventListener("DOMContentLoaded", animationTickmark);

// -------------------------------------------------------->

// sending money to benificary
// Replace this with the URL of your API endpoint
const API_URL = "https://reqres.in/api/users";

// Get the beneficiary select element and the beneficiary list div
const beneficiarySelect = document.getElementById("beneficiary");
const beneficiaryList = document.getElementById("beneficiaryList");

// Fetch the beneficiary data from the API
function fetchBeneficiaryData(){


}

