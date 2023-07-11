document.addEventListener("DOMContentLoaded", function() {
    
    const enemiesCar = document.querySelector('#car-enemies')
    const carblack = '<img src="assets/img/cars/enemies/black.png" alt="">';
    const carblue = '<img src="assets/img/cars/enemies/blue.png" alt="">';
    const cargreen = '<img src="assets/img/cars/enemies/green.png" alt="">';
    const carorange = '<img src="assets/img/cars/enemies/orange.png" alt="">';
    const point = document.querySelector('#points span');
    const car = document.getElementById("car");
    const finish = document.querySelector('#finish');
    const finishImage = document.querySelector('#finish img');
    const carRect = car.getBoundingClientRect()
    let position = 10 ;

    function createCar(){
        const carros = [carblack, carblue, cargreen,carorange];
        const carroSoteado = carros[Math.floor(Math.random() * carros.length)];
        enemiesCar.innerHTML = carroSoteado;

        let downMode = document.querySelector('#car-enemies img')
        const animacoes = ['moveDownLeftEnemies', 'moveDownRightEnemies', 'moveDownEnemies',
            'moveDownRight800Enemies','moveDownRight600Enemies','moveDownLeft800Enemies','moveDownLeft600Enemies'
        ];
        animateTime = gerarNumeroAleatorio(10,30);
        const animacaoSorteada = animacoes[Math.floor(Math.random() * animacoes.length)];
        downMode.style.animation = animacaoSorteada+' '+animateTime+'s forwards' 
        
        position--;
        if(position==0){
            position=1;
        }

        point.innerHTML = position+'º lugar';

        if(position==1){
            setTimeout(function(){
                finish.innerHTML = '<img src="assets/img/finish.png" alt="">'
                finishImage.style.animation = 'animation: finish 40s forwards'
                setTimeout(function(){
                    document.querySelector('.win').style.display = 'block';
                    document.querySelector('.end').style.display = 'block';
                    document.querySelector('#car-enemies').style.display = 'none';
                    document.querySelector('#car-enemies').remove()
                    document.querySelector('.obstacles').style.display = 'none';
                    document.querySelector('.obstacles').remove()
                    document.querySelector('#infos').style.display = 'none';
                },4000)
            },3000)
        }


    }
       let setCreateCar =  setInterval(createCar,6000);

    function gerarNumeroAleatorio(numeroMinimo,numeroMaximo) {      
        const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
      
        return numeroAleatorio;
      }

});