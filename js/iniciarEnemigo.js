let actualx = 0;
let actualy =0;
        let actualy = 0;
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

//-----------------------------------------------------------------
let actualx = 0;
let actualy = 0;
for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 10; i++) {
        if(j == 0){
            console.log(j+" "+i+" hola");
        }
        else if(j==1 || j==2){
            console.log(j+" "+i+" adios");
        }
        else{
            console.log(j+" "+i+" bye");
        }
    }
            
}