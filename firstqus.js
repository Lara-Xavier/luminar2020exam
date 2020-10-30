

 
 


     var ar=[ 3, 1, 4, 6, 5 ] 
     var ar_size = []; 
   
 
            var n;
         for (var i = 0; i < n; i++) { 
            for (var j = i + 1; j < n; j++) { 
                for (var k = j + 1; k < n; k++) { 
                    
                    var x = ar[i] * ar[i], y = ar[j] * ar[j], z = ar[k] * ar[k]; 
  
                    if (x == y + z || y == x + z || z == x + y) 
                        {
                            console.log(x,"+",y,"+",z)
                        }
                } 
            } 
        } 
         
         
        
      
       