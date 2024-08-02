const cnv=document.querySelector('.canvas');

cnv.fillStyle='crimson';
cnv.strokeStyle='grey';
cnv.clientWidth=5;

cnv.beginPath();
cnv.moveTo(400,50);
cnv.lineTo(550,250);
cnv.lineTo(250,250);
cnv.closePath();
cnv.style();
cnv.stroke();


//func

function constructor(id,data ){
    this.id=id;
    this.data=data;
};

constructor.prototype.information=(a=>this.data+=a);


constructor();


//HOF
 const get=[2,4,6,8,10];
 const result=get.filter(a=>a<9)
 .map(a=>a*2)
 .reduce((x,y)=>{
    return x+y;
 });



 console.log(result);

