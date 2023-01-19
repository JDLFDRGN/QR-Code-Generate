function $(query){
    return document.querySelectorAll(query);
}

function removeClass(element, className){
    element.classList.remove(className);
}

function addClass(element, className){
    element.classList.add(className);
}

let button = $('.qr-button')[0];
let input = $('.qr-input')[0];
let qrcode = $('.qr-code')[0];

button.addEventListener('click', ()=>{
    if(!input.value) return;
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    removeClass(qrcode, 'hide');
})

input.addEventListener('keyup', ()=>{
    if(input.value) return;
    addClass(qrcode, 'hide');
})