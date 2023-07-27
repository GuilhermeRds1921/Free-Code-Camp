let count = 0;

function cc(card) {
  // Only change code below this line
 if(card <= 6){
   count+=1;
 }
 else if (card<=9){
   count = count;
 }
 else{
   count-=1;
 }

 if(count >= 1){
   return (count + " Bet");
 }
 else{
   return (count + " Hold");
 }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');