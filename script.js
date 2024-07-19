

for(var i=1; i<=100; i++) {

    console.log(i);
}



 for(var j=1; j<100; j+=2) {

   console.log(j);

 }


for(var j=0; j<100; j+=2) {

    console.log(j);

}






  var lower=parseInt(prompt("enter the lowest interval"));
 var higher=parseInt(prompt("enter the highest interval"));
  console.log("the prime numbers between  the given interval are");


 for(let i= lower; i<=higher;i++) {
      let flag=0;

     for(let j=2; j<i;j++) {
         if(i%j===0) {
             flag=1;
              break;
         }
     }
          if(i>1&& flag===0) {
         console.log(i);
     }
}




  


