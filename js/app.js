// UI

const contactbox = document.getElementById('contact');
const close = document.getElementById('close-btn');
const open = document.getElementById('open-btn');
const submit = document.getElementById('submit-btns');


// Show Contact Box 

open.addEventListener('click',()=>{
    contactbox.classList.add('active');
});

// CLose Contact Box

close.addEventListener('click',()=>{
    contactbox.classList.remove('active');
});

submit.addEventListener('click',()=>{
    contactbox.classList.remove('active');
})
