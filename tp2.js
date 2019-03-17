//Local de ventas de PCs
//Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

//Lista de las vendedoras de la empresa
//Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), componentes (un array Strings con el nombre de cada componente vendido).
//Lista de precios de los componentes, de la forma (nombre componente, precio).

var local = { //objeto
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"], //array

  ventas: [ //array de objetos
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [ //array de objetos
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

//1 - Se pide desarrollar las siguientes funciones:

//Precios
//precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
//local.precios[0].componente // tengo el nombre monitor gprs 3000

function precioMaquina(componentes) { //componentes es el parametro que pongo como array
  var total = 0;
  for (var i = 0; i < componentes.length; i++) {
    console.log(componentes[i]);
    for (var j = 0; j < local.precios.length; j++) { //ya esta la i entonces cambio el nombre de la variable
      if (componentes[i] == local.precios[j].componente) {
        total = total + local.precios[j].precio //primero precio es 200 y desp 120, por eso las sumas
        console.log(local.precios[j].precio);
      } //con la i repito siempre el mismo, j tengo todos
    }
  }
  return total; //nunca poner un return dentro de un for
} 

console.log(/*'El precio de la máquina es: ' +*/ precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); //OJO, INGRESA UN ARRAY!!

//Map
/*function precioMaquina(componentes) {
  componentes.map(function(item, i, array) {
    local.precios.map(function(itemDos, iDos, arrayDos) { //prestar atencion al tipo de dato que comparo

    })
  })
}*/
//console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)

//Cantidad de ventas
//Recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. 
//La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

//PENSAR QUE TENGO QUE RECORRER CON EL FOR CADA VEZ QUE NECESITO UN DATO

function cantidadVentasComponente(componente) { 
  var totalComponente = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    for (var j = 0; j < local.ventas[i].componentes.length; j++) {
      if (componente == local.ventas[i].componentes[j]) {
        totalComponente = totalComponente + 1;
      }
    }
  }
  return totalComponente;
}

console.log( /*'El componente fue vendido ' +*/ cantidadVentasComponente('Monitor GPRS 3000') /*+ ' veces'*/); 
//console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2

//Vendedora del mes

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. 
//O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
//llamo a la funcion precioMaquina para calcular el total de la venta final del nuevo array de ada y de grace
//comparar los dos resultados para ver quien gano mas

function vendedoraDelMes(mes, anio) {
  var ventasAda = 0;
  var ventasGrace = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    /*console.log(local.ventas[i].fecha.getMonth() + 1); //para que de bien el mes
    console.log(mes)
    console.log(local.ventas[i].fecha.getFullYear());
    console.log(anio);*/
    if ( local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio ) { //aca filtro los meses
      //console.log(precioMaquina(local.ventas[i].componentes)); 
      //console.log('La vendedora fue: ' + local.ventas[i].nombreVendedora);
      if ( local.ventas[i].nombreVendedora == 'Ada') {
        ventasAda = ventasAda + precioMaquina(local.ventas[i].componentes);
        console.log('Las ventas de Ada son: ' + ventasAda);
      } else if ( local.ventas[i].nombreVendedora == 'Grace' ) {
        ventasGrace = ventasGrace + precioMaquina(local.ventas[i].componentes);
        console.log('Las ventas de Grace son: ' + ventasGrace);
      }
    }
  }
  if ( ventasAda > ventasGrace ) {
    return 'Ada';
  } else if ( ventasGrace > ventasAda ) {
    return 'Grace';
  }
}

console.log( /*'La vendedora del mes fue: ' +*/ vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
//Hacer con Grace y Ada y cuando ya la entendimos, lo hacemos con las 4

//Ventas del mes
//Obtener las ventas de un mes.

function ventasMes(mes, anio) {
  var ventaDelMes = 0;
  for ( var i = 0; i < local.ventas.length; i++ ) {
    if ( local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio ) {
      ventaDelMes = ventaDelMes + precioMaquina(local.ventas[i].componentes)
      //console.log(local.ventas[i].componentes);
    }
  }
  return ventaDelMes;
}

console.log( /*'Las ventas del mes ingresado son de ' +*/  ventasMes(1, 2019) ); // 1250

//Ventas por vendedora
//Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
//pushear en una nueva variable para cada vendedora

function ventasVendedora(nombre) {
  var ventasTotalesVendedora = 0;
  for ( var i = 0; i < local.ventas.length; i++ ) {
    if ( local.ventas[i].nombreVendedora === nombre ) {
      ventasTotalesVendedora = ventasTotalesVendedora + precioMaquina(local.ventas[i].componentes);
      //console.log(local.ventas[i].componentes);
      //console.log(ventasTotalesVendedora);
    } 
  }
  return ventasTotalesVendedora;
} 

console.log( /*'Las ventas totales de son de ' + */ ventasVendedora('Grace') ); // 900

//Componentes mas vendido
//Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {
  var listaComponentes = [];
  for ( var i = 0; i < local.precios.length; i++ ) {
    listaComponentes.push((cantidadVentasComponente(local.precios[i].componente)));
    //console.log(listaComponentes);
  }
  var valorMax = 0;
  var posicionValorMax = 0;
  for ( var j = 0; j < listaComponentes.length; j++ ) {
    if ( listaComponentes[j] > valorMax ) {
      valorMax = listaComponentes[j];
      posicionValorMax = j;
      //console.log(valorMax);
      //console.log(posicionValorMax);
    }
    return local.precios[j].componente;
  }
} 

console.log( /*'El componente más vendido es: ' + */ componenteMasVendido() ); // Monitor GPRS 3000

//Si hubo ventas
//que indica si hubo ventas en un mes determinado.

function huboVentas(mes, anio) {
  for ( var i = 0; i < local.ventas.length; i++ ) {
    
  }
}

console.log( huboVentas(3, 2019) ); // false

/*//2 - Nueva sucursal

//Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. 
//Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. 
//Por este cambio, se pide:

//En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
//Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal

// 12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro
// 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito
// 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro
// 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito
// 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro
// 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito
// 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro
// 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro
// 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito
// 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro
// 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro
// 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito
// 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro

//Ventas por sucursal

Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

console.log( ventasSucursal("Centro") ); // 4195

//Comparaciones

//Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. 
//Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

//Sucursal del mes

Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. 
No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

console.log( sucursalDelMes(1, 2019) ); // "Centro"

//3 - Renders

//Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. 
//Para esto, necesitamos crear las siguientes funciones:

//Render por mes

renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
console.log( renderPorMes() );
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210

//Render por sucursal

renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
console.log( renderPorSucursal() );
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265

//Render total

render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó
console.log( render() );
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace*/

