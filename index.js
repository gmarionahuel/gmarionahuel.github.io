
window.addEventListener('scroll',mostrarScroll);
animado = document.getElementById('skills');

let español = true;
let bool = false;
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    let alturaPantalla = window.screen.height;
    let alturaDiv = animado.offsetTop;
    
    let scrollBottom = scrollTop + alturaPantalla;
   
  
    
    
        
        
    
}



window.onload = function (){
    const header = document.getElementById('header');
    const languages = document.getElementById('languages');
    setTimeout(()=>{
        español = true;
        languages.style.opacity = 1;
        setTimeout(()=>{
            header.style.opacity = 1;
            setTimeout(()=>{
                document.getElementById('arcia').style.color = "rgb(16 15 33 / 50%)";
            },300)
        },300);
        
        

    },2000);
}



const language = document.getElementById('language-toggle');
const spanish = document.querySelectorAll('.spanish');

const english = document.querySelectorAll('.english');



language.addEventListener('click',()=>{  
    if (language.checked == true){    
       english.forEach((englishElement)=>{
        englishElement.classList.remove('nonseen');
       });
       spanish.forEach((spanishElement)=>{
        spanishElement.classList.add('nonseen');
       });
       español = false;
    }
    else {      
        english.forEach((englishElement)=>{
            englishElement.classList.add('nonseen');
           })
           spanish.forEach((spanishElement)=>{
            spanishElement.classList.remove('nonseen');
           })
           español = true;
        }
    }
);




function send(){
    
    let nombreEmisor = '';
    let mensaje = '';
    let mailEmisor = '';

   
    nombreEmisor = document.getElementById('nombreMsj').value;
    mensaje = document.getElementById('msj').value;
    emailEmisor = document.getElementById('emailMsj').value;
 
   

    console.log(nombreEmisor);
    console.log(emailEmisor);
    console.log(mensaje);
    nombreEmisor = "";
    mailEmisor = "";
    mensaje ="";
    
}


let btn = document.getElementById('btnSend');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_rr3f15a';
   const templateID = 'template_gnjxo49';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
    document.getElementById('nombreMsj').value='';
    document.getElementById('msj').value='';
    document.getElementById('emailMsj').value='';
});
/*
emailjs.send("service_tg0sibn","template_gnjxo49",{
    from_name: nombreEmisor,
    message: mensaje,
    reply_to: mailEmisor,
    });*/

