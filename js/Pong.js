class Bola{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    r = 10;
    vx=6;
    vy=0;
    Dibujar(){
        fill(255);
        ellipse(this.x, this.y, this.r, this.r);
        noFill();

    }
    Mover(){
        this.x += this.vx;
        this.y += this.vy;
    }
    ColisionConPalas(palaJ1,palaJ2){
        if((this.y >= palaJ1.y && this.y <= palaJ1.y+100)  && (this.x <= palaJ1.x+10)){
            this.vx -= 0.5;
            this.vx = this.vx * -1;
            if(Math.random()>0.5){
                this.vy = this.vy * Math.random()*2 +1;
            }
            else{
                this.vy = this.vy * Math.random()*2 -1;
            }
        }
        if((this.y >= palaJ2.y && this.y <= palaJ2.y+100)  && (this.x >=palaJ2.x)){
            this.vx += 0.5;
            this.vx = this.vx * -1;
            if(Math.random()>0.5){
                this.vy = this.vy * Math.random()*2 +1;
            }
            else{
                this.vy = this.vy * Math.random()*2 -1;
            }
        }
    }
    ColisionConParedes(){
        if(this.x<=0){
            SumarPuntos(2);
            this.vx = 6;
            this.vy = 0;
            if(Math.random()>0.5){
                this.vy = this.vy * Math.random()*2 +1;
            }
            else{
                this.vy = this.vy * Math.random()*2 -1;
            }
            this.x = 640;
            this.y = 360;
        }
        if( this.x >=1280){
            SumarPuntos(1);
            this.vx = -6;
            this.vy = 0;
            if(Math.random()>0.5){
                this.vy = this.vy * Math.random()*2 +1;
            }
            else{
                this.vy = this.vy * Math.random()*2 -1;
            }
            this.x = 640;
            this.y = 360;
        }
        if(this.y<=0 || this.y>=720){
            this.vy=this.vy*-1;
        }
    }
}
//----------------------------------------------------------------------------------------
class Pala{
    constructor(x,y,jugador){
        this.x = x;
        this.y = y;
        this.jugador = jugador;
    }
    w = 10;
    h = 100;

    Dibujar(){
        if(this.jugador == 1){
            fill(56, 235, 243);
            rect(this.x,this.y,this.w,this.h);
            noFill();
        }
        if(this.jugador == 2){
            fill(240, 134, 151);
            rect(this.x,this.y,this.w,this.h);
            noFill();
        }
        
    }
    Moverse(){
        if(this.jugador == 1){
            if (keyIsDown(87) && this.y > 0) { //87 = keycode de w
                this.y = this.y-10;
              }
              if(keyIsDown(83) && this.y < (720-100)){ //83 = keycode de s
                this.y = this.y +10;
            }
        }
        if(this.jugador == 2){
            if (keyIsDown(38) && this.y > 0) { //38 = keycode de flecha arriba
                this.y = this.y-10;
              }
              if(keyIsDown(40) && this.y < (720-100)){ //40 = keycode de flecha abajo
                this.y = this.y +10;
            }
        }
        
    }
}
//------------------------------------------------------------------------------------------
var palaJugador1 = new Pala(10,310,1);
var palaJugador2 = new Pala(1260,310,2);
var bola = new Bola(640,360);
var ptosJ1 = 0, ptosJ2 = 0;
//-------------------------------------------------------------------------
function setup(){
    createCanvas(1280, 720);
    background(0);
}
function draw(){
    background(0);
    fill(255,30);
    rect(635,0,10,720);
    noFill();
    DibujarTexto();
    palaJugador1.Dibujar();
    palaJugador1.Moverse();

    palaJugador2.Dibujar();
    palaJugador2.Moverse();

    bola.Dibujar();
    bola.Mover();
    bola.ColisionConPalas(palaJugador1,palaJugador2);
    bola.ColisionConParedes();
}
function SumarPuntos(jugador){
    
    if(jugador == 1){
        ptosJ1++;
        document.getElementById("puntuacionJ1").innerHTML = Number.parseInt(document.getElementById("puntuacionJ1").innerHTML)+1;
    }
    if(jugador == 2){
        ptosJ2++;
        document.getElementById("puntuacionJ2").innerHTML = Number.parseInt(document.getElementById("puntuacionJ2").innerHTML)+1;
    }
}
function DibujarTexto(){
    textAlign(CENTER)
    textSize(300);
    fill(255,60);
    text(ptosJ1, 320, 450);
    text(ptosJ2, 950, 450);
}