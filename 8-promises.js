// const add=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//       resolve(a+b);
//       //reject("eror to find sum")
//      },2000)
//     })
// }
// add(4,5).then((result)=>{
// console.log("sum is "+result);
// console.log("now this sum is passing to the next stage add again to make after asnc asnc");
// add(result*1,45).then((sum2)=>{
// console.log("the second sum is "+sum2);
// }).catch((error)=>{
// console.log("could not find sum");
// })
// }).catch((error)=>{
// console.log(error);
// })
//the above deep asynchronization can be solved promise chaining
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      resolve(a+b);
      //reject("eror to find sum")
     },2000)
    })
}
add(4,5).then((sum)=>{
console.log("sum is "+sum);
console.log("now this sum is passing to the next stage add again to make after asnc asnc");
  return add(sum,20);
  //the result of the second add will be passed to next chained then clause 
  //wherever you find the error the execution stops immediately and the last catch is called
}).then((sum2)=>{
 console.log("this is sum2 "+sum2);
}).catch((error)=>{
console.log(error);
})
















//basics of promise
// const doWorkpromise=new Promise((resolve,reject)=>{
//     //if everything is fine then resolve is called with result data
//     //if something goes wrong then reject is called with data
//     //you can write your asynchronus code in the promise
//     //when the code finishes you just call the 
//     //appropriate function
//     setTimeout(()=>{
//     //suppose success
//     //resolve([23,45,67])
//     //suppose failure
//     reject("something went wrong this is to be done")
//     },2000)
// })

// doWorkpromise.then((result)=>{
// console.log("Success !",result)
// }).catch((error)=>{
// console.log("Error :" ,error)
// })