 let button = document.querySelector('button');
 button.addEventListener('click',inputmsg);
   
 function inputmsg(){
    let name = prompt("ENter name ");
    button.textContent= 'ROLLNUMBER' +name;
 }