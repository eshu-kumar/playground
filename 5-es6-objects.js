//object property shorthand
// const name="Eshu kumar";
// const age=25;
// const user={
//     name,//this is ok but the name must be available exactly outside this is called shorthand
//     age:age,
//     location:"Bangalore"
// }
// console.log(user);
//object destructuring
const product={
    label:"Red notebook",
    price:3,
    stock:20,
    saleprice:undefined
}
//const {label:productlabel,stock,rating=5}=product;
// console.log(productlabel);
// console.log(stock);
// console.log(rating);
const transection=(type,{label,price})=>{
console.log(type,label,price)
}
transection('order' , product);