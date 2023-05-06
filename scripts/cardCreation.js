let form = document.querySelector("form");
let fName = form.fName;
let mName = form.mName;
let lName = form.lName;
let color = form.color;
let cardNumber = document.getElementById("number");
let cardName = document.getElementById("name");
let card = document.getElementById("card");
// let color=form.color.value;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(fName.value);
  console.log(mName.value);
  console.log(lName.value);
  console.log(color.value);
  cardName.innerText = `${fName.value}${mName.value} ${lName.value}`;
  card.style.color = "white";
  if (color.value == "gold") {
    card.style.backgroundImage = "url('./images/gold.png')";
    card.style.backgroundSize = "cover";
    card.style.color = "#f9f9f9";
  }
  if (color.value == "black") {
    card.style.backgroundImage = "url('./images/black.png')";
    card.style.backgroundSize = "cover";
  }
  if (color.value == "green") {
    card.style.backgroundImage = "url('./images/green.png')";
    card.style.backgroundSize = "cover";
  }
  if (color.value == "brown") {
    card.style.backgroundImage = "url('./images/brown.png')";
    card.style.backgroundSize = "cover";
  }
  card.style.display = "block";
});
let order=document.getElementById('order');
order.addEventListener('click',function(){
    alert('Order Placed Successfully !!')
})
