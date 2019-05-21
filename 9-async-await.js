const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         if(a<0||b<0){
             return reject("number must be non negative");
         }
         resolve(a+b);
     },2000)
    })
}
const doWork =async ()=>{
const sum=await add(1,2);
console.log("executed first time");
const sum1=await add(sum,10);
console.log("executed second time");
const sum2=await add(sum1,-30);
console.log("executed third time");
return sum2;
//remember sum2 will be like Promise {sum2} and returned to call and then we call ten an catch on it 
//acordingly
}
doWork().then((result)=>{
  console.log(result)
}).catch((error)=>{
console.log("Error ! ",error);
})