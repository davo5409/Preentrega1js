/*LA CASA DE EMPANADAS*/

/* let empanadas
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

/* OBJETOS, ARRAYS, FUNCIONES DE ORDEN SUPERIOR */

function InfoProveedores(nombre, calle, producto){
   this.nombre = nombre;
   this.calle = calle;
   this.producto = producto;
}
const Proveedor1 = new InfoProveedores("Pablo", "Juramento 1234", "cajas");
const Proveedor2 = new InfoProveedores("Darío", "French 1111", "Tapas de empanada");
const Proveedor3 = new InfoProveedores("Claudio", "Helguera 2222", "bebidas");
console.log(Proveedor2);

let nombreEmpanada = "la casa de la empanada";

console.log(nombreEmpanada.length);
console.log(nombreEmpanada.toUpperCase());

const arraysEmpanadas = ["jamon y queso", "carne", "pollo", "humita", "roquefort"];
console.log(arraysEmpanadas);
arraysEmpanadas.push("verdura");
console.log(arraysEmpanadas);
console.log(arraysEmpanadas.join("-"));

const precioEmpanadas = [120, 180, 150, 170, 200];
console.log(precioEmpanadas);
precioEmpanadas.unshift(140);
console.log(precioEmpanadas);

const precioProducto = arraysEmpanadas.concat(precioEmpanadas);
console.log(precioProducto);
console.log(arraysEmpanadas.indexOf("roquefort"));
console.log(arraysEmpanadas.includes("calabresa"));

const listaFinal = [{id: 1, empanada: "jamon y queso",precio: 120},
                   {id: 2, empanada: "carne", precio:180},
                   {id: 3, empanada: "pollo", precio:150},
                  {id: 4, empanada:"humita", precio:170},
                  {id:5, empanada:"roquefort", precio: 200}];
             
for (const empanada of listaFinal) {
   console.log(empanada.id);
   console.log(empanada.empanada);   
}

const PI = Math.PI
console.log(Math.PI);
console.log(Math.round(PI));

console.log(new Date());
console.log(new Date(2023, 4, 20));

const FechaProximoPedido = new Date("Mayo, 25, 2023 10:30");
console.log(FechaProximoPedido);

const Hoy = new Date("Mayo, 20, 2023");
console.log(Hoy.getFullYear());
console.log(Hoy.getMonth ());

console.log ((FechaProximoPedido - Hoy) / (60000)); //Minutos que faltan para hacer el próximo pedido de mercadería




   
