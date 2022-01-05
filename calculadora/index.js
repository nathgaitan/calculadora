



const calculadora = {
    sumar : function(a,b){
        return a + b
    },
    restar : function (a,b){
        return a-b
    },
    multiplicar : function(a,b){
        return a*b
        if (a ==0,b == 0)
        return 0 
    },
    dividir : function(a,b){
   
        if (a == 0 || b == 0 ){ 
        return  "no se puede dividir por cero"}
     
        return a/b
     
     }

}
module.exports = calculadora;