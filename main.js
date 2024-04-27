

function ingresar(){
    let identificar = true
    let intentos = 1

    do{

    let usuario = prompt("Bienvenido a La Nueva financiera, ingresa tu usuario, para calcular el prestamo").toLowerCase()
    if(usuario === null){
        alert("incorrecto, debe ingresar su usuario")
        break;
    }
    if(usuario == "nicolas" && intentos <= 3){
        alert("Bienvenido Nicolas al sistema de prestamos")
        identificar = false
    }else {
        alert("no se reconoce el usuario " + usuario)
        intentos++
    if(intentos > 3){
        alert("Usted supero los 3 intentos, vuelva mas tarde")
        break;
     }
    }
    }while(identificar)


    if (identificar == false) {
        function calcular(){
            let prestamo = parseInt(prompt("Ingrese el monto del prestamos que desea solicitar"))
            let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas, en las que quiere pagar su prestamo. Puede hacerlo en 1, 3, 6, 12 y 24 cuotas."))
            
            switch (cuotas) {
                case 1:
                    monto1 = prestamo * 1.1
                    encuotas1 = (monto1 / cuotas).toFixed(2)
                    alert("El monto total del prestamo sera $" + monto1 + " en " + cuotas + " cuotas de $" + encuotas1)
                    break;
                case 3: 
                    monto1 = prestamo * 1.15
                    encuotas1 = (monto1 / cuotas).toFixed(2)
                    alert("El monto total del prestamo sera $" + monto1 + " en " + cuotas + " cuotas de $" + encuotas1)
                    break;
                case 6: 
                    monto1 = prestamo * 1.2
                    encuotas1 = (monto1 / cuotas).toFixed(2)
                    alert("El monto total del prestamo sera $" + monto1 + " en " + cuotas + " cuotas de $" + encuotas1)
                    break; 
                case 12: 
                    monto1 = prestamo * 1.3
                    encuotas1 = (monto1 / cuotas).toFixed(2)
                    alert("El monto total del prestamo sera $" + monto1 + " en " + cuotas + " cuotas de $" + encuotas1)
                    break;
                case 24: 
                    monto1 = prestamo * 1.4
                    encuotas1 = (monto1 / cuotas).toFixed(2)
                    alert("El monto total del prestamo sera $" + monto1 + " en " + cuotas + " cuotas de $" + encuotas1)
                    break;
                default:
                    alert("El monto de cuotas es incorrecto, vuelve a intentarlo") 
                    break;
            }
            
        }
        
        calcular()

    } else{
        alert("No puede calcular su prestamo")
    
    }
    

    
}

ingresar()




