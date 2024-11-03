let operaciones = [4000, 3000, -2000, -1000];

function calculateBalances(operaciones) {
    let deposito = 0;
    let retiro = 0;
    
    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i] > 0) {
         console.log(deposito = operaciones[i] ); 
    } else if (operaciones[i] < 0) {
        console.log(retiro = (operaciones[i]) );        
    }
    }
    let saldo = deposito - retiro;
    return saldo
}
let nuevoArray = [deposito = 7000,retiro = 3000,saldo = 4000];
 


function bankBalance(nombre,apellido) {

console.log (`Estimada ${nombre} ${apellido}:
El monto total de los depósitos es de: $${deposito}
El monto total de los retiros es de: $${retiro}
Por lo tanto, su saldo actual en la cuenta es de: $${saldo}`)


}
console.log(calculateBalances(operaciones));


console.log(bankBalance("Fulanita","Perez"));

