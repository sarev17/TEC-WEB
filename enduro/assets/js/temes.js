document.addEventListener("DOMContentLoaded", function() {
    const skyTeme = document.querySelector('#sky')
    const backgroundTeme = document.querySelector('#background')
    const temes = document.querySelectorAll('.temas img');

    temes.forEach(teme=>{
        teme.addEventListener('click',function(){
            let id = teme.id
            console.log(id);
            if(id=='diurno'){
                skyTeme.style.backgroundImage  = "url('/assets/img/paisagens/montais-day.jpg')"
                backgroundTeme.style.backgroundColor = '#144d02'
                
            }else if(id=='noturno'){
                skyTeme.style.backgroundImage  = "url('/assets/img/paisagens/montais-nigth.avif')"
                backgroundTeme.style.backgroundColor = '#061900'
            }else{
                skyTeme.style.backgroundImage  = "url('/assets/img/paisagens/montais-neve.jpg')"
                backgroundTeme.style.backgroundColor = 'white'
            }
        })
    })

})