//Local de ventas de PCs
//Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

//Lista de las vendedoras de la empresa
//Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), componentes (un array Strings con el nombre de cada componente vendido).
//Lista de precios de los componentes, de la forma (nombre componente, precio).

var local = { //objeto
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"], //array

  sucursales: ['Centro', 'Caballito'],

  ventas: [ //array de objetos
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'], sucursal: 'Centro' },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'], sucursal: 'Centro' },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ['Monitor ASC 543', 'Motherboard MZI'], sucursal: 'Centro' },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200'], sucursal: 'Centro' },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1200'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', componentes: ['Monitor GPRS 3000', 'HDD Toyiva'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 24), nombreVendedora: 'Sheryl', componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 1, 1), nombreVendedora: 'Ada', componentes: ['Motherboard MZI', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 11), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 1, 15), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 1, 21), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'RAM Quinston'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 8), nombreVendedora: 'Sheryl', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 16), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 27), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 1, 22), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 5), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1500', 'RAM Quinston'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 1), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 1, 7), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 1, 14), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Centro' }
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

console.log('El precio de la máquina es: ' + precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); //OJO, INGRESA UN ARRAY!!

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

console.log('El componente fue vendido ' + cantidadVentasComponente('Monitor GPRS 3000') + ' veces');

//Vendedora del mes

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. 
//O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
//llamo a la funcion precioMaquina para calcular el total de la venta final del nuevo array de ada y de grace
//comparar los dos resultados para ver quien gano mas

/*function vendedoraDelMes(mes, anio) {
  var ventasAda = 0;
  var ventasGrace = 0;
  var ventasHedy = 0;
  var ventasSheryl = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    /*console.log(local.ventas[i].fecha.getMonth() + 1); //para que de bien el mes
    console.log(mes)
    console.log(local.ventas[i].fecha.getFullYear());
    console.log(anio);*/
    /*if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) { //aca filtro los meses
      //console.log(precioMaquina(local.ventas[i].componentes)); 
      //console.log('La vendedora fue: ' + local.ventas[i].nombreVendedora);
      if (local.ventas[i].nombreVendedora == 'Ada') {
        ventasAda = ventasAda + precioMaquina(local.ventas[i].componentes);
        console.log('Las ventas de Ada son: ' + ventasAda);
      } else if (local.ventas[i].nombreVendedora == 'Grace') {
        ventasGrace = ventasGrace + precioMaquina(local.ventas[i].componentes);
        console.log('Las ventas de Grace son: ' + ventasGrace);
      } else if (local.ventas[i].nombreVendedora == 'Hedy') {
        ventasHedy = ventasHedy + precioMaquina(local.ventas[i].componentes);
        console.log('Las ventas de Hedy son: ' + ventasHedy)
      } else if (local.ventas[i].nombreVendedora == 'Sheryl') {
        ventasSheryl = ventasSheryl + precioMaquina(local.ventas[i].componentes);
        console.log('Las ventas de Sheryl son: ' + ventasSheryl)
      }
    }
  }*/
 /* if (ventasAda > ventasGrace && ventasAda > ventasHedy && ventasAda > ventasSheryl) {
    return 'Ada';
  } else if (ventasGrace > ventasAda && ventasGrace > ventasHedy && ventasGrace > ventasSheryl) {
    return 'Grace';
  } else if (ventasHedy > ventasAda && ventasHedy > ventasGrace && ventasHedy > ventasSheryl) {
    return 'Hedy'
  } else if (ventasSheryl > ventasAda && ventasSheryl > ventasGrace && ventasSheryl > ventasHedy) {
    return 'Sheryl'
  }
}*/


//Vendedora del mes version dinamica

function vendedoraDelMes(mes, anio) {
  var arrayVendedoras = [];
  for ( var j = 0; j < local.vendedoras.length; j++ ) {
    var objetoNuevo =
    { nombre: local.vendedoras[j],
      ventas: 0,
    }
    for ( var i = 0; i < local.ventas.length; i++ ) {
      if ( local.ventas[i].fecha.getMonth() + 1 === mes && local.ventas[i].fecha.getFullYear() === anio ) {
        if ( local.vendedoras[j] === local.ventas[i].nombreVendedora ) {
          if ( objetoNuevo.nombre === local.ventas[i].nombreVendedora) {
            objetoNuevo.ventas = objetoNuevo.ventas + precioMaquina(local.ventas[i].componentes);
            console.log(objetoNuevo);
          }
        }
        
      }
    }
  }
  arrayVendedoras.push(objetoNuevo);
  console.log(arrayVendedoras)
  var valorMaximo = 0;
  var nombreVendedora = '';
  var posicion = 0;
  for ( var k = 0; k < arrayVendedoras.length; k++ ) {
    if ( valorMaximo < arrayVendedoras[k].ventas ) {
      valorMaximo = arrayVendedoras[k].ventas;
      posicion = k;
    }
  }
  return arrayVendedoras[posicion].nombre
}

console.log('La vendedora del mes fue: ' + vendedoraDelMes(2, 2019)); //Enero: Ada / Febrero: Sheryl
//Ventas del mes
//Obtener las ventas de un mes.

function ventasMes(mes, anio) {
  var ventaDelMes = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      ventaDelMes = ventaDelMes + precioMaquina(local.ventas[i].componentes)
      //console.log(local.ventas[i].componentes);
    }
  }
  return ventaDelMes;
}

console.log('Las ventas del mes ingresado son de: ' + ventasMes(1, 2019));

//Ventas por vendedora
//Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
//pushear en una nueva variable para cada vendedora

function ventasVendedora(nombre) {
  var ventasTotalesVendedora = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].nombreVendedora === nombre) {
      ventasTotalesVendedora = ventasTotalesVendedora + precioMaquina(local.ventas[i].componentes);
      //console.log(local.ventas[i].componentes);
      //console.log(ventasTotalesVendedora);
    }
  }
  return ventasTotalesVendedora;
}

console.log('Las ventas totales de la vendedora ingresada son de: ' + ventasVendedora('Grace'));

//Componentes mas vendido
//Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {
  var listaComponentes = [];
  for (var i = 0; i < local.precios.length; i++) {
    listaComponentes.push((cantidadVentasComponente(local.precios[i].componente)));
    //console.log(listaComponentes);
  }
  var valorMax = 0;
  var posicionValorMax = 0;
  for (var j = 0; j < listaComponentes.length; j++) {
    if (listaComponentes[j] > valorMax) {
      valorMax = listaComponentes[j];
      posicionValorMax = j;
      //console.log(valorMax);
      //console.log(posicionValorMax);
    }
    return local.precios[j].componente;
  }
}

console.log('El componente más vendido es: ' + componenteMasVendido()); // Monitor GPRS 3000

//Si hubo ventas
//que indica si hubo ventas en un mes determinado.

function huboVentas(mes, anio) {
  var mesDeVenta;
  for ( var i = 0; i < local.ventas.length; i++ ) {
    if ( local.ventas[i].fecha.getMonth() + 1 === mes && local.ventas[i].fecha.getFullYear() === anio ) {
      //console.log(local.ventas[i].componentes);
      mesDeVenta = true;
    } else if ( local.ventas[i].fecha.getMonth() + 1 !== mes && local.ventas[i].fecha.getFullYear() === anio ) {
      //console.log('En este mes no hubo ventas');
      mesDeVenta = false;
    } else if ( local.ventas[i].fecha.getMonth() + 1 !== mes && local.ventas[i].fecha.getFullYear() !== anio ) {
      //console.log('Tampoco hubo ventas');
      mesDeVenta = false;
    }
  }
  return mesDeVenta
}

console.log( 'En el mes ingresado hubo ventas: ' +  huboVentas(3, 2019) ); // false

//2 - Nueva sucursal

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
//Crear la función ventasSucursal que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal) {
  var ventasLocal = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (sucursal === local.ventas[i].sucursal) {
      //console.log(local.ventas[i].componentes)
      ventasLocal = ventasLocal + precioMaquina(local.ventas[i].componentes);
      //console.log(ventasLocal)
    }
  } return ventasLocal;
}

console.log('Las ventas de la sucursal ingresada tienen un importe de: ' + ventasSucursal("Centro")); // 4195

//Comparaciones
//Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. 
//Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

function ventasVendedoraPorSucursal(nombreVendedora, nombreSucursal) {
  var ventasTotalesVendedora = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].nombreVendedora === nombreVendedora && local.ventas[i].sucursal === nombreSucursal) {
      ventasTotalesVendedora = ventasTotalesVendedora + precioMaquina(local.ventas[i].componentes);
    }
  }
  return ventasTotalesVendedora
}

console.log('Las ventas son de la vendedora en el local elegido son de: ' + ventasVendedoraPorSucursal('Hedy', 'Caballito'));

//Sucursal del mes
//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. 
//No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

/*function sucursalDelMes(mes, anio) {
  var locales = [];
  for (var j = 0; j < local.sucursales.length; j++) {
    var ventasPorMes = 
    { local: local.sucursales[j],
      ventas: 0,
    }
    for (var i = 0; i < local.ventas.length; i++) {
      if ( local.ventas[i].fecha.getMonth() + 1 === mes && local.ventas[i].fecha.getFullYear() === anio ) {
        if ( local.sucursales[j] === local.ventas[i].sucursal ) {
          if ( ventasPorMes.local === local.ventas[i].sucursal ) {
            ventasPorMes.ventas = ventasPorMes.ventas + precioMaquina(local.ventas[i].componentes)
            console.log(ventasPorMes);
          }
        }
      } 
    } 
  }
  locales.push(ventasPorMes);
  console.log(locales)
  var valorMaximo = 0;
  var sucursalGanadora = '';
  var posicion = 0;
  for ( var k = 0; k < locales.length; k++ ) {
    if ( valorMaximo < locales[k].ventas ) {
      valorMaximo = locales[k].ventas;
      posicion = k;
    }
  }
  return locales[posicion].local //Siempre devuelve Caballito, REVISAR
}*/

//Hardcodeado porque el otro no me salio

function sucursalDelMes(mes, anio) {
  var ventasEnero =  0;
  var ventasFebrero = 0;
  for ( var i = 0; i < local.ventas.length; i++ ) {

  }

}

console.log('La sucursal del mes es: ' + sucursalDelMes(1, 2019)); //'Centro'

//3 - Renders
//Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes.
//Para esto, necesitamos crear las siguientes funciones:

//renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

function renderPorMes() {
  var contadorDeVentasEnero = 0;
  var contadorDeVentasFebrero = 0;
  for ( var i = 0; i < local.ventas.length; i++ ) {
    if ( local.ventas[i].fecha.getMonth() === 0 && local.ventas[i].fecha.getFullYear() === 2019 ) {
      //console.log(local.ventas[i].componentes)
      contadorDeVentasEnero = contadorDeVentasEnero + precioMaquina(local.ventas[i].componentes)
    } else if ( local.ventas[i].fecha.getMonth() === 1 && local.ventas[i].fecha.getFullYear() === 2019 ) {
      contadorDeVentasFebrero = contadorDeVentasFebrero + precioMaquina(local.ventas[i].componentes)
    }
  }
  console.log('Las ventas totales de enero son de: ' + contadorDeVentasEnero)
  console.log('Las ventas totales de febrero son de: ' + contadorDeVentasFebrero)
}

console.log( renderPorMes() );

// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210

//renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal


/*function renderPorSucursal() {
  var locales = [];
  for (var j = 0; j < local.sucursales.length; j++) {
    var ventasPorMes = 
    { local: local.sucursales[j],
      ventas: 0,
    }
    for (var i = 0; i < local.ventas.length; i++) {
      if ( local.sucursales[j] === local.ventas[i].sucursal ) {
        if ( ventasPorMes.local === local.ventas[i].sucursal ) {
          ventasPorMes.ventas = ventasPorMes.ventas + precioMaquina(local.ventas[i].componentes)
          console.log(ventasPorMes);
        }
      }
    }
  }   
  locales.push(ventasPorMes);
  console.log(locales);
}

console.log( renderPorSucursal() );*/

// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265

//render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

/*function render() {

}

console.log( render() );*/

// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace
