const fs=require('fs')
// const book ={
//     title:"Ego is the enemy",
//     author:"Ryan Holiday"
// }
// const bookJson=JSON.stringify(book);
// console.log(bookJson)
// //now we are creating a json file to store the json data
// fs.writeFileSync('1-json.json',bookJson);
const dataBuffer=fs.readFileSync('1-json.json');
const dataJson=dataBuffer.toString();
const data=JSON.parse(dataJson)
data.name="eshu";
data.planet="mercuary";
data.age=25;
const jsonstring=JSON.stringify(data);
fs.writeFileSync("1-json.json",jsonstring);
