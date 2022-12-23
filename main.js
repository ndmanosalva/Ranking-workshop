let submit = document.querySelector('#submit');
let span = document.querySelector('span');
let mainContainer = document.querySelector('#mainContainer')
let secondContainer = document.querySelector('#secondContainer')
let select = document.querySelectorAll('.select')
let value;


submit.addEventListener('click',()=>{
    if(value){
      let votos = JSON.parse(localStorage.getItem("votos")) || [];
      votos.push(value);
      localStorage.setItem("votos", JSON.stringify(votos));
        mainContainer.style.display = 'none';
        secondContainer.style.display = 'flex';
    }
})


select.forEach(element => {
    element.addEventListener('click',() =>{
        value = element.getAttribute('value')
        span.innerHTML=(`You selected ${value} out of 5`)
console.log(value)
    })
})







