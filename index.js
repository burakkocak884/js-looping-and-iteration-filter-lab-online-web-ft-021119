


    function findMatching(driver, name){
 const newDriversArray = [];
 
 for(const firstName of driver){

 	if (firstName.toLowerCase()  === name.toLowerCase()) { 		
 		 newDriversArray.push(firstName); 	
 }
}
return newDriversArray;
}
function fuzzyMatch(drivers, firstTwoLetters){
return drivers.filter(function(el) {
      return el.charAt(0).toLowerCase() === firstTwoLetters.charAt(0).toLowerCase();
  })
}
 function matchName(driver, name){
const newDrivers = [];

 for(const firstName of driver){

 	if (firstName.name === name) {
 		
 		 newDrivers.push(firstName);
 }
 }
return newDrivers;

 }

// Code your solution in this file
