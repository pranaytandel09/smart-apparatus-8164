let balance=document.getElementById('balance');
// let balanceData=localStorage.getItem('balance-data')||500000
// localStorage.setItem('balance-data',balanceData);

let amt=500000;
balance.innerText=amt;
let transactionDetails= JSON.parse(localStorage.getItem("transaction")) ||[];
updated()
function updated(){
    if(transactionDetails.length!=0){
        transactionDetails.forEach((el)=>{
            amt=amt-el.debitableAmount;
            balance.innerText= `$${amt}`;
        })
    }
}

let education=document.getElementById('education');
education.addEventListener('click',function(){
    window.location.href="universities.html"
})