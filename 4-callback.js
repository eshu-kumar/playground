const doWorkCallback=(callback)=>{
    setTimeout(()=>{
          //callback("this is an error" ,undefined);
        callback(undefined,[23,45,67]);
    },2000)
}
doWorkCallback((error,result)=>{
    if(error){
        return console.log(error);
    }
    console.log(result);
})