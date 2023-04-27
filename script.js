
const primaryHeader = document.getElementById('primary-header');


window.addEventListener('scroll', ()=>{
    if(window.scrollY > primaryHeader.clientHeight){
        primaryHeader.classList.add('scrolled');
    }
    else{
        primaryHeader.classList.remove('scrolled');
    }
})