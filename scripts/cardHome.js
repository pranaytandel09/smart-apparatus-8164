let virtual=document.getElementById('virtual');
virtual.addEventListener('change',function(){
    if (this.checked) {
        window.location.href="cardCreation.html"
      } 
})

let physical=document.getElementById('physical');
physical.addEventListener('change',function(){
    if (this.checked) {
        window.location.href="physicalCardpage.html"
      } 
})