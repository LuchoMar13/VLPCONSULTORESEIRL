let modal=document.getElementById('miModal');
let flex=document.getElementById('flex');
let abrir=document.getElementById('abrir');
let cerrar=document.getElementById('close');
abrir.addEventListener('click',function(){
    modal.style.display='block'
});
cerrar.addEventListener('click',function(){
    modal.style.display='none'
});
window.addEventListener('click',function(e){
    if(e.target==flex)
    {
        modal.style.display='none';
    }
});

let modal2=document.getElementById('miModal2');
let flex2=document.getElementById('flex2');
let abrir2=document.getElementById('abrir2');
let cerrar2=document.getElementById('close2');
abrir2.addEventListener('click',function(){
    modal2.style.display='block'
});
cerrar2.addEventListener('click',function(){
    modal2.style.display='none'
});
window.addEventListener('click',function(e){
    if(e.target==flex2)
    {
        modal2.style.display='none';
    }
});

let modal3=document.getElementById('miModal3');
let flex3=document.getElementById('flex3');
let abrir3=document.getElementById('abrir3');
let cerrar3=document.getElementById('close3');
abrir3.addEventListener('click',function(){
    modal3.style.display='block'
});
cerrar3.addEventListener('click',function(){
    modal3.style.display='none'
});
window.addEventListener('click',function(e){
    if(e.target==flex3)
    {
        modal3.style.display='none';
    }
});

let modal4=document.getElementById('miModal4');
let flex4=document.getElementById('flex4');
let abrir4=document.getElementById('abrir4');
let cerra4r=document.getElementById('close4');
abrir4.addEventListener('click',function(){
    modal4.style.display='block'
});
cerra4r.addEventListener('click',function(){
    modal4.style.display='none'
});
window.addEventListener('click',function(e){
    if(e.target==flex4)
    {
        modal4.style.display='none';
    }
});

const video=document.getElementById('video');
        const play=document.getElementById('play');
        const pausa=document.getElementById('pausa');
        play.addEventListener('click',()=>{
            video.play()
        })
        pausa.addEventListener('click',()=>{
            video.pause()
        })