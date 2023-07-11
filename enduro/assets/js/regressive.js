document.write('<script src="cars.js"></script>');
document.addEventListener("DOMContentLoaded", function() {
  function esperarTresSegundos() {
    
    setTimeout(function() {
      
      execute()
      
    }, 3000); // 3000 milissegundos = 3 segundos
  }
  
  // Chamar a função de espera de 3 segundos
  esperarTresSegundos();

  function execute(){
    const car = document.getElementById("car");
    const carImage = document.querySelector('#car img')
    const roadSide = document.querySelector('#road-side')
    const obstacles = document.querySelector('.obstacles')
    let obstacle = document.querySelector('.obstacles img')
    let topPosition = car.offsetTop;
    let leftPosition = car.offsetLeft;
   
    let velocidade = 0.3
    let incremento = 0.1

    let fuel = 100;
    let life = 5;
    


   
    // código das setas
    const KEY_LEFT = 37;
    const KEY_UP = 38;
    const KEY_RIGHT = 39;
    const KEY_DOWM = 40;
    
    /* FUNÇÃO PARA MOVIMENTAR O CARRINHO */
    function movecar(event) {
        
      switch (event.keyCode) {
        case KEY_LEFT:
            leftPosition -= 20;
            if(leftPosition == 260){
                leftPosition+=20;
            }
            cordinatesCar = carCordinates();
          break;
        case KEY_RIGHT:
            leftPosition += 20;
            if(leftPosition == 740){
                leftPosition-=20;
            }
            cordinatesCar = carCordinates();
          break;
        case KEY_UP :
            velocidade = velocidade-incremento
            if(velocidade<=0){
                velocidade = 0.1;
            }
            velocidade = velocidade.toFixed(2)
            roadSide.style.animation = "intermitente "+velocidade+"s linear infinite";
            carImage.src = "assets/img/cars/red/acelerate.png";
            break;
        case KEY_DOWM :
            velocidade = 0.3
            roadSide.style.animation = "";
            carImage.src = "assets/img/cars/red/stop.png";
            break;
      }
  
      car.style.top = topPosition + "px";
      car.style.left = leftPosition + "px";
    }

  
    document.addEventListener("keydown", movecar);

    function escolherObstaculo() {
        const cone = '<img src="assets/img/obstacles/cone.png" alt="">';
        const barreira = '<img src="assets/img/obstacles/barreira.png" alt="">';
        const carBlue = '<img src="assets/img/cars/blue/front.png" alt="">'
        const atraso = '<img src="assets/img/obstacles/atraso.png" alt="">'
        const fuelBomb = '<img id="bombFuel" src="assets/img/fuel.png" alt="">'
      
        const numeroAleatorio = Math.random();
      
        //forçando bomba de cobbustível

        if(fuel == 10){
            obstacle.innerHTML = fuelBomb
            return fuelBomb;
        }

        if (numeroAleatorio <= 0.20) {
            obstacle.innerHTML = cone
          return cone;
        } else if(numeroAleatorio <=0.40) {
            obstacle.innerHTML = carBlue
            return carBlue;
        }
        else if(numeroAleatorio<=0.6){
            obstacle.innerHTML = atraso
            return atraso;
        }
        else if(numeroAleatorio<=0.8){
            obstacle.innerHTML = fuelBomb
            return fuelBomb;
        }
        else{
            obstacle.innerHTML = barreira
          return barreira;
        }
      }

    
    //essa função cria obstáculos na pista
    function activeObstacle(){
        obstacles.innerHTML = escolherObstaculo();
        let downMode = document.querySelector('.obstacles img')
        const animacoes = ['moveDownLeft', 'moveDownRight', 'moveDown',
            'moveDownRight800','moveDownRight600','moveDownLeft800','moveDownLeft600'
        ];
        const animacaoSorteada = animacoes[Math.floor(Math.random() * animacoes.length)];
        downMode.style.animation = animacaoSorteada+' 6s forwards' 
    };
    setInterval(activeObstacle, Math.random() * 2000 + 1000);

    //coordenadas do carro

    function carCordinates(){
        const carRect = car.getBoundingClientRect();
        const carX = carRect.left;
        const carY = carRect.top;
        return [carX,carY];
    }
    function cordinatesObstacle(){
        const obstacleRect = document.querySelector('.obstacles img').getBoundingClientRect();
        const obstacleX = obstacleRect.left;
        const obstacleY = obstacleRect.top;
        testColision()
        return [obstacleX,obstacleY];
    }
    setInterval(cordinatesObstacle,100);

    function testColision(){
        const retangulo1 = car.getBoundingClientRect();
        const retangulo2 = document.querySelector('.obstacles img').getBoundingClientRect();
        const retFinish = document.querySelector('#finish img').getBoundingClientRect();
        // if(retFinish.top>300){
        //   alert('venceu');
        // }
        if (
            retangulo1.left < retangulo2.right &&
            retangulo1.right > retangulo2.left &&
            retangulo1.top < retangulo2.bottom &&
            retangulo1.bottom > retangulo2.top ||
            retFinish.top == retangulo1 .top
          ) {
            if(document.querySelector('.obstacles img').id=='bombFuel'){
                fuel+=10;
                document.querySelector('#slife').innerHTML = fuel+'%';

            }else{
                car.innerHTML = '<img src="assets/img/cars/red/side.png" alt="">';
                let lifeT = document.querySelector('#life picture')
                life -=1;
                lifeT.innerHTML = '';
                for(let i=0;i<life;i++){
                    lifeT.innerHTML+='<img src="assets/img/red-heart-symbol-on-transparent-background-free-png.webp" alt="">'
                }
            }
          }
          if(life <= 0){
            car.innerHTML = '<img src="assets/img/explosion.gif" alt="">'
          }
    }

    function reduceFuel(){
        fuel -=10;
        document.querySelector('#slife').innerHTML = fuel+'%';
    }
    setInterval(reduceFuel,10000);

    function updateCar(){
      if(life == 0 || fuel == 0){
            // window.location.href = 'lose.html';
            document.querySelector('.end').style.display = 'block';
            document.querySelector('#car-enemies').style.display = 'none';
            document.querySelector('#car-enemies').remove()
            document.querySelector('.obstacles').style.display = 'none';
            document.querySelector('.obstacles').remove()
            document.querySelector('#infos').style.display = 'none';
            document.querySelector('.end span').innerHTML = document.querySelector('#points span').innerHTML

            clearInterval(setCreateCar);
          }
      car.innerHTML = '<img src="assets/img/cars/red/back.png" alt="">'
    }
    setInterval(updateCar,2000);


}

  });

  
  