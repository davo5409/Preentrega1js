/*LA CASA DE EMPANADAS*/

let empanadas
let casaDeEmpanadas
direccion = "calle 123"

casaDeEmpanadas = prompt("ingrese su nombre");

   alert("bienvenido a la casa de empanadas!");

let pedido = parseInt( prompt("ingrese cantidad de empanadas que quiere pedir"));


if(pedido >=12){
   parseInt(prompt("De que gustos te gustaría pedir?"));
   alert("ya estamos preparando tu pedido y en breve te lo enviamos");

}else{(pedido <12)
   alert("Disculpanos el mínimo para envío es una docena de empanadas, podes retirarlas por " +direccion);
}


empanadas = alert("Ingrese cuatro gustos de empanadas");
{
   prompt("gusto 1")
   for (let i = 1; i < 4; i++ );
   
   }

   {prompt("gusto 2")  
   for (let i = 2; i < 4; i++ );
        }

   {prompt("gusto 3")
   for (let i = 3; i < 4; i++ );
      
   }

   {prompt("gusto 4")
   for (let i = 4; i < 4; i++ );
      alert("buena elección" );
      alert("Gracias por sus respuestas!");

   }    
   


   let productos = prompt("nuestros 5 productos fundamentales en la elaboración de empanadas");
   while (productos != 'q'){
      switch (productos){
case "1":
   alert("Harina 0000");
   break;
   case "2":
      alert("Carne picada especial");
      break; 
      case "3":
         alert("Aceitunas verdes");
         break;
         case "4":
            alert("Jamón natural");
            break;
         case "5":
            alert("Huevos orgánicos")   
            default:
               alert("Nos conociste un poco más, gracias por elegirnos!");
               break;

       }
       productos = prompt("nuestros 5 productos fundamentales en la elaboración de empanadas");
 }


/* calcular las últimas tres ventas del local */ 

const suma = (a, b, c, d) => {return a + b + c + d}
console.log(suma(12, 12, 12, 6))


