// const square=function(num){
// return num*num;
// }
// console.log(square(45));
//demo of arrow function
// const square=(num)=>{
//     return num*num
// }
// const square = (x)=>x*x ;
// console.log(square(2));
const event = {
    name:"Birthday party",
    guestList:["eshu","rohit","rashmi"],
    printGuestList(){
        console.log("Guest list for "+this.name);
        this.guestList.forEach(element => {
            console.log(element+" is attending the "+this.name)
        });

    }
}
event.printGuestList();