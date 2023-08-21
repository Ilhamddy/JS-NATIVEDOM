var namePanjang= prompt("what Ur Name ");

var isolateName = namePanjang.slice(0,1);

var capitalizeFirstName = isolateName.toLowerCase();

var rest0name = namePanjang.slice(1,namePanjang.length);


rest0name = rest0name.toLocaleUpperCase();


var capitalizeAllName = capitalizeFirstName + rest0name;

console.log(capitalizeAllName);






function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        let yearsRemaining = 90 - age;
        let days = yearsRemaining * 365;
        let weeks = yearsRemaining * 52;
        let months = yearsRemaining * 12;
        
        console.log(" You have " + days + " days, " + weeks + " weeks, and " + months + " months left. ");
        
        
    /*************Don't change the code below**********/
    }
    lifeInWeeks(51);




    function aspek(bootle){

        // var numberBootles = Math.floor(bootle / 1.5); 
      
        console.log("u buy Milk bootle " + numberBootles );
      
      
        return bootle % 1.5; 
      
      
      }
      
      function calcBootles(startingMoney, costBootle){
        var numberBootles = Math.floor(startingMoney /costBootle);
        
        return numberBootles;
           
      
      }
      
      // var change = aspek(4);
      // console.log(change);