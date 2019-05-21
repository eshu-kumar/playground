const https = require('https');
const url='https://api.darksky.net/forecast/20c5703c638354f15ca37e69270c4955/40,-75?units=si';
const request=https.request(url,(response)=>{
let data="";
response.on('data',(chunk)=>{
data=data+chunk;
})
response.on('end',()=>{
    const dataobj=JSON.parse(data);
    console.log(dataobj)
})
})
request.on('error',(error)=>{
    console.log(error)
})
request.end();