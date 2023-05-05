let form=document.querySelector('form');
let fName=form.fName;
let mName=form.mName;
let lName=form.lName;
let color=form.color;
let cardNumber=document.getElementById('number');
let cardName=document.getElementById('name');
let card=document.getElementById('card');
// let color=form.color.value;
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(fName.value)
    console.log(mName.value)
    console.log(lName.value)
    console.log(color.value)
    cardName.innerText=`${fName.value}${mName.value} ${lName.value}`;
    if(color.value=="gold"){
        card.style.backgroundImage="url('./images/gold.png')";
        card.style.backgroundSize="cover"
    }
    // card.style.backgroundColor=;
    card.style.color="white";
    card.style.display="block";
})