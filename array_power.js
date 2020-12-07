var arr=[2,4,3,1];
var cnt=1;


for(let num of arr){
    console.log(num**cnt)
    cnt=cnt+1;
}

var arr=[4,3,6];
var total=0;


for(let item of arr){
    total=total+item;
}

for(let num of arr){
    console.log(total-num);
}