

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) { 
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
     
    var a = startdate.getTime();
    var b = endDate.getTime();
    
    var c = b - a;
    
    var d = parseInt((c/(1000*60*60*24)).toFixed(0));
    
    return d;
    
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) { 
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
   return getDays(startdate, endDate);
}

