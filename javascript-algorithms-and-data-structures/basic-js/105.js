// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  let val;
    for(let i=0; i<4; i++){
      if(contacts[i].firstName == name){
        if(contacts[i].hasOwnProperty(prop)){
            val = contacts[i][prop];
            break;
        }
        else{
         val = "No such property";
         break;
        }
      }
      else if(i==3){
         val = "No such contact";
         break;
      }
    }
    return val;
    // Only change code above this line
  }
  lookUpProfile("Kristian", "lastName");