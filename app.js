let number = document.querySelector('input');
let numoutput = document.querySelector('.numoutput');
let select = number.value;
let newLi = document.querySelector('li')
let newUl = document.querySelector('ul')


number.addEventListener('change',myfunction)
 function myfunction(){
let select = number.value
  if(select >=1000){
    numoutput.innerHTML = "your number cannot chooose"
}else if(select === 0){
    numoutput.innerHTML = "your number cannot chooose"
}
  else {
    numoutput.innerHTML = "your are number is : "+select;
  }
 }

 function ulshit(){
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    let Number = document.createTextNode(number.value)
    
    li.appendChild(Number);
    ul.appendChild(li);

 }

