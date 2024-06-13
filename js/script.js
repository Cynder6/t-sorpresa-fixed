class Marcianito{
    constructor(){

    }
    w = 30;
    h = 30;
    urlEn ="./assets/enemy.png";
    urlEn1 ="./assets/enemy01.png";
    urlEn12 ="./assets/enemy01-2.png";
    urlEn2 ="./assets/enemy02.png";
    urlEn22 ="./assets/enemy02-2.png";
    urlEn3 ="./assets/enemy03.png";
    urlEn32 ="./assets/enemy03-2.png";
    prepararAssetsEnemigos(){
        this.enemigo0 = loadImage(this.urlEn);
        this.enemigo01 = loadImage(this.urlEn1);
        this.enemigo012 = loadImage(this.urlEn12);
        this.enemigo02 = loadImage(this.urlEn2);
        this.enemigo022 = loadImage(this.urlEn22);
        this.enemigo03 = loadImage(this.urlEn3);
        this.enemigo032 = loadImage(this.urlEn32);
    }
    arrayEnemigos=[]
    size = 32;
    InicializarEnemy(){
        let actualx = 0;
        let actualy =0;
        for (let j = 0; j < 5; j++) {
            for (let i = 0; i < 10; i++) {
                
                if(j==0){
                    this.arrayEnemigos.push({
                        x: actualx+(108-this.size)/2,
                        y:actualy+(40-this.size)/2, 
                        muerto:false,
                        img: this.enemigo01,
                        imgAlt: this.enemigo012
                    });
                }
                else if(j==1 || j==2){
                    this.arrayEnemigos.push({
                        x: actualx+(108-this.size)/2,
                        y:actualy+(40-this.size)/2, 
                        muerto:false,
                        img: this.enemigo02,
                        imgAlt: this.enemigo022
                    });
                }
                else{
                    this.arrayEnemigos.push({
                        x: actualx+(108-this.size)/2,
                        y:actualy+(40-this.size)/2, 
                        muerto:false,
                        img: this.enemigo03,
                        imgAlt: this.enemigo032
                    });
                }
                
                actualx = actualx+128;
            }
            actualx =0;
            actualy +=40;
        }
    }
    coolDown = 0
    maxCoolDown = 2000;
    modoDibujo = true;
    DibujarEnemigos(){
        this.arrayEnemigos.forEach(enemigo => {
            if(this.coolDown==0){
                this.coolDown= this.maxCoolDown;
                this.modoDibujo = !this.modoDibujo;
            }
            else{
                this.coolDown--;
            }
            if(this.modoDibujo){
                image(enemigo.img,enemigo.x,enemigo.y,this.size,this.size)
            }
            else{
                image(enemigo.imgAlt,enemigo.x,enemigo.y,this.size,this.size)
            }
            
        });
    }
    Movimiento(){

    }
}
//-----------------------------------------------
class Nave{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    w = 30;
    h = 30
    url = "./assets/ship.png";
    coolDown = 0
    maxCoolDown = 30;

    CargarAssetsNave(){
        this.imgNave = loadImage(this.url)
    }

    DibujarNave(){
        imageMode(CENTER);
        image(this.imgNave,this.x,this.y,this.w,this.h);
        imageMode(CORNER);
    }

    ControlNave(arrayProyectiles){
      if (keyIsDown(65) && this.x > 0) {
        this.x = this.x-10;
        //console.log("izda");
      }
      if(keyIsDown(68) && this.x < 1280){
        this.x = this.x +10;
        //console.log("dcha");
      }
      if(keyIsDown(32)){
        this.Disparar(arrayProyectiles);
      }
    }
    Disparar(arrayProyectiles){
        
        if(this.coolDown !=0){
            this.coolDown--;
        }
        else{
            arrayProyectiles.push(new Bala(this.x));
            this.coolDown = this.maxCoolDown;
        }
    }
}
//---------------------------------------------
class Bala{
    y = 670
    constructor(x){
        this.x=x;
    }
    DibujarBala(){
        fill("yellow")
        rect(this.x,this.y,2,10);
        noFill();
    }
    Mover(){
        this.y-=3;
    }
}
//---------------------------------------------
var arrayProyectiles = [];
var jugador = new Nave(640,700);
let enemigo = new Marcianito();
function preload(){
    jugador.CargarAssetsNave();
    enemigo.prepararAssetsEnemigos();
}

function setup(){
    createCanvas(1280,720);
    enemigo.InicializarEnemy();
    background(0);
  
}
function draw(){
    background(0);
    enemigo.DibujarEnemigos();
    jugador.DibujarNave();
    jugador.ControlNave(arrayProyectiles);
    arrayProyectiles.forEach(proyectil => {
        proyectil.DibujarBala();
        proyectil.Mover();
    });
}