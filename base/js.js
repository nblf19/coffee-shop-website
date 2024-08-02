function get(){
    return new Promise((resolve,reject)=>{
    const time=4000;
    if(time<6000){
        setTimeout(()=>{
            resolve(`succes`);
        },2000);
    }
    else{
        reject(`error`);
            
    }
});
}
//
get
.then(Response=>console.log(Response))
.catch(Response=>console.log(Response));

//asyc
async function asyc(){
    try{
        const result= await get(); 
        console.log(result);
    }
    catch(reject){
        console.log(reject);
    }
};
asyc();

$.ajax({
    url:`data.json`,
    success:(z)=>{
            z.forEach(e => console.log(e.id));
    },

    error:()=>{},
});
