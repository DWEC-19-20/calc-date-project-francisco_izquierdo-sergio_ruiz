const ms = 24 * 60 * 60 * 1000;
    
var dfest = [[1, 6],[],[],[],[1],[],[],[15],[],[12],[1],[6, 8, 25]];

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
    console.log(diaI+", "+diaF+", "+dif+", "+FechaF);
    return FechaF;
    
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) {     
    
    startdate.setMonth(startdate.getMonth() - 1);
    
    if(days > 0){
        
        for(let c = 0 ; c < days ; c++){
        
            startdate.setDate(startdate.getDate() + 1);
            
            if(fest(startdate)) c--;
            
        }
        
    }
    
    else if(days < 0){
        
        for(let c = days ; c <= 0 ; c++){
        
            startdate.setDate(startdate.getDate() - 1);
            
            if(fest(startdate)) c--;
            
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
   
    startdate.setMonth(startdate.getMonth() - 1);
    endDate.setMonth(endDate.getMonth() - 1);
    
    var diaI = startdate.getTime();
    var diaF = endDate.getTime();
    var dif = diaF - diaI;
    var FechaF = parseInt((dif/ms).toFixed(0));
    var diasEx = 0;
    
    if(FechaF > 0){
        
        for(let c = 0 ; c < FechaF ; c++){
        
            startdate.setDate(startdate.getDate() + 1);
            
            if(fest(startdate)) diasEx--;
            
        }
        
    }
    
    else if(FechaF < 0){
        
        for(let c = FechaF ; c <= 0 ; c++){
        
            startdate.setDate(startdate.getDate() - 1);
            
            if(fest(startdate)) diasEx++;
            
        }
        
    }
    
    return FechaF + diasEx;
    
}


/* Función para comprobar si un día es festivo */
function fest(dia){
    
    var festivo = false;
    
    for(let c = 0 ; c < dfest.length ; c++){
    
        for(let i = 0 ; i < dfest[c].length ; i++){
        
            if(dia.getDay() == 0 || dia.getDay() == 6) {
                
                festivo = true;
            
                break;
                
            }
            
            if(dia.getMonth() == c && dia.getDate() == dfest[c][i]) {
                
                festivo = true;
                
                break;
                
            }
    
        }
            
    }
        
    return festivo;
    
}