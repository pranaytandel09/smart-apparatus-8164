let data = JSON.parse(localStorage.getItem("user-data")) || [];

let order = document.getElementById("order");
order.addEventListener("click", function () {
  alert("Order Placed Successfully !!");
});

let userName = document.getElementById("name");
userName.innerText=data[data.length-1].name;

// console.log(data[data.length-1].name)