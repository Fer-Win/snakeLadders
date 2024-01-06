import fs from 'fs';

const newFile = fs.createWriteStream('newFile3.js');

newFile.write('export const data = [\n');


for (let i = 1; i <= 100; i++) {
    let x,y;
    if(i%10===0){
        if((Math.floor(i/10))%2 !=0 ){
             x= 720 - ( (i%10))*80; 
        }else{
            x = 0;
        }
       
        y= 720 - ((i/10)-1)*80;
    }else{
        if((Math.floor(i/10)-1)%2 !=0 ){
             x=  ( (i%10)-1)*80;
        }else{
            x= 720 - ( (i%10)-1)*80; 
        }
      
       y= 720 - (Math.floor(i/10))*80;
    }

        const block = {
        "id": i,
        "snakeAndLadders":null,
        "x": x,
        "y":y,
        
    };

    if (Math.random() < 0.4) {
        block.snakeAndLadders=Math.ceil(Math.random() * 100);
    }

    newFile.write(JSON.stringify(block, null, 2) + ',\n');
}
newFile.write('\n]');
