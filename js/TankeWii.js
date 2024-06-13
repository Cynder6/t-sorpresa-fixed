class Tanque{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //-------------------------------------------------
    //variables para dibujar el tanque
    size = 50;
    sizeTower=this.size/1.25;

    DibujarCuerpo(){
        rectMode(CENTER);
        //dibuja las ruedas
        fill(70);
        rect(0,0,this.size+10,this.size-5,10);
        //dibuja el cuerpo del tanque
        fill(75, 123, 85);
        rect(0,0,this.size,this.size,5)

    }
    DibujarTorreta(){
        rectMode(CENTER);
        ellipse(0,0,this.sizeTower,this.sizeTower);
        rect(0,0,this.sizeTower-10,this.sizeTower-10,5)
    }
    DibujarCanion(){
        rect(0,0-this.sizeTower,5,this.sizeTower);
    }
    //-----------------------------------------------------------------------------------
    //variables para el movimiento
    currentBodyAngle = 0;
    currentTowerAngle = 0;
    velocidadMovimiento = 3;

    Mover(){
        angleMode(DEGREES);
        const angulosEnRadianes = this.currentBodyAngle * Math.PI /180;
        const desplazamientoEnX = this.velocidadMovimiento* Math.sin(angulosEnRadianes);
        const desplazamientoEnY = this.velocidadMovimiento* Math.cos(angulosEnRadianes);

        if(keyIsDown(37)){
            //girar torre izda
            this.currentTowerAngle = this.currentTowerAngle - 1;
        }
        if(keyIsDown(39)){
            //girar torre dcha
            this.currentTowerAngle = this.currentTowerAngle + 1;
        }
        if(keyIsDown(87)){
            //mover cuerpo delante
            this.x = this.x + desplazamientoEnX;
            this.y = this.y - desplazamientoEnY;
        }
        if(keyIsDown(83)){
            //mover cuerpo atras
            this.x = this.x - desplazamientoEnX;
            this.y = this.y + desplazamientoEnY;
        }
        if(keyIsDown(65)){
            //girar cuerpo izda
            this.currentBodyAngle = this.currentBodyAngle - 1;
        }
        if(keyIsDown(68)){
            //girar cuerpo dcha
            this.currentBodyAngle = this.currentBodyAngle + 1;
        }
        
        translate(this.x,this.y)//el tanque se crea en el (0,0) y lo movemos a las cordenadas indicadas
        rotate(this.currentBodyAngle);
        this.DibujarCuerpo();//dibujo el cuerpo depues de haber calculado su giro
        rotate(this.currentTowerAngle);
        this.DibujarTorreta();//dibujo el cuerpo depues de haber calculado su giro
        this.DibujarCanion();
    }
}
//-------------------------------------------------------------------------------------
class Balas{
    constructor(x,y,angulo){
        this.x = x;
        this.y = y;
        this.angulo = angulo;
    }
    CalcularAngulo(){
        const anguloEnRadianes = this.angulo * Math.PI /180;
        this.desplazamientoEnX = 10* Math.sin(anguloEnRadianes);
        this.desplazamientoEnY = 10* Math.cos(anguloEnRadianes);
        
    }
    Dibujar(){
        push();
        pop();
    }
    Mover(){
        this.CalcularAngulo();
        this.x = this.x + this.desplazamientoEnX;
        this.y = this.y + this.desplazamientoEnY;
    }
}
//-------------------------------------------------------------------------------------
var tanque = new Tanque(640,360);
function setup(){
    createCanvas(1280, 720);
    background(225, 205, 130);
    
}
function draw(){
    background(225, 205, 130);
    tanque.Mover();
}

