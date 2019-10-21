const ms = 24 * 60 * 60 * 1000;

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) { 
    
    startdate.setMonth(startdate.getMonth() - 1);
    startdate.setDate(startdate.getDate() + days);
    
    return startdate.toLocaleDateString('es-ES');
    
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
     
    startdate.setMonth(startdate.getMonth() - 1);
    endDate.setMonth(endDate.getMonth() - 1);
    
    var diaI = startdate.getTime();
    var diaF = endDate.getTime();
    var dif = diaF - diaI;
    var FechaF = parseInt((dif/ms).toFixed(0));
    
    return FechaF;
    
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) {     
    
    startdate.setMonth(startdate.getMonth() - 1);
    
    var festivos = [["1Ene", "6Ene"],[],[],[],["1May"],[],[],["15Ag"],[],["12Oct"],["1Nov"],["6Dic", "8Dic", "25Dic"]];
    
    if(days > 0){
        
        for(let c = 0 ; c < days ; c++){
        
            startdate.setDate(startdate.getDate() + 1);
        
            if(startdate.getDay() == 0 || startdate.getDay() == 6) c--;
          
        }
        
    }
    
    else if(days < 0){
        
        for(let c = days ; c <= 0 ; c++){
        
            startdate.setDate(startdate.getDate() - 1);
        
            if(startdate.getDay() == 0 || startdate.getDay() == 6) c--;
          
        }
        
    }
    
    return startdate.toLocaleDateString('es-ES');
    
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
   return getDays(startdate, endDate);
}

