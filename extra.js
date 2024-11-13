function showNumber(numero) {

   
    for(let i = 0;i  < 10;i++)
       
       console.log(numero + i);
       
      
          
    }
    //console.log( showNumber(25));
    
    
    //for(let i = 1;i * 3 <= 57;i++)
    // console.log(i * 3);
     
    
    
    function stringMayuscula(params) {
       for (let i = 0; i < params.length; i++) {
          
           const element =params.toUpperCase();
          return element
       }
    }
    console.log( stringMayuscula("union fc campeon invicto del torneo clausura Virgen Niña"));
     

    module.exports = {
        showNumbers,
        printEveryThree,
        totalSummation,
        showToUpperCase
    }