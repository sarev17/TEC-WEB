document.addEventListener("DOMContentLoaded", function() {
    
    const enemiesCar = document.querySelector('#car-enemies')
    const carblack = '<img src="assets/img/cars/enemies/black.png" alt="">';
    const carblue = '<img src="assets/img/cars/enemies/blue.png" alt="">';
    const cargreen = '<img src="assets/img/cars/enemies/green.png" alt="">';
    const carorange = '<img src="assets/img/cars/enemies/orange.png" alt="">';

    let points = -1;

    function createCar(){
        points++;
        
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

    }
        setInterval(createCar,4000);

    function gerarNumeroAleatorio(numeroMinimo,numeroMaximo) {      
        const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
      
        return numeroAleatorio;
      }

});