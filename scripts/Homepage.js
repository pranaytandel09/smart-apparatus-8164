let balacne=document.getElementById('balacne');
let balacneData=localStorage.getItem('balance-data')||500000
balacne.innerText=`$${balacneData}`
localStorage.setItem('balance-data',balacneData)