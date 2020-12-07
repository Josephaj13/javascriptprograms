var arr=[1,2,3,4,5,6,7,8,9];
var total=6;


for(let item of arr){
    total=total+item;
}

for(let num of arr){
    console.log(total-num);
}