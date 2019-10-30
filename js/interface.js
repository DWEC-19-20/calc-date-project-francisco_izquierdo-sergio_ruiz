document.getElementById("añadirHoy").addEventListener("click", function(){
    
    var hoy = new Date();
    
    var mes = hoy.getMonth() + 1;
    
    document.getElementById("añadirDfecha").value = hoy.getFullYear() + "-" + mes + "-" + hoy.getDate();
    
})

document.getElementById("añadirHoy1").addEventListener("click", function(){
    
    var hoy = new Date();
    
    var mes = hoy.getMonth() + 1;
    
    document.getElementById("añadirDfecha1").value = hoy.getFullYear() + "-" + mes + "-" + hoy.getDate();
    
})

document.getElementById("añadirHoy2").addEventListener("click", function(){
    
    var hoy = new Date();
    
    var mes = hoy.getMonth() + 1;
    
    document.getElementById("añadirDfecha2").value = hoy.getFullYear() + "-" + mes + "-" + hoy.getDate();
    
})

document.getElementById("añadirHoy3").addEventListener("click", function(){
    
    var hoy = new Date();
    
    var mes = hoy.getMonth() + 1;
    
    document.getElementById("añadirDfecha3").value = hoy.getFullYear() + "-" + mes + "-" + hoy.getDate();
    
})

document.getElementById("calcAñadirDias").addEventListener("click", function(){
    
    var fecha = document.getElementById("añadirDfecha").value;
    
    fecha = fecha.split("-");
    
    fecha = new Date(parseInt(fecha[0]), parseInt(fecha[1]), parseInt(fecha[2]));
    
    var dias = parseInt(document.getElementById("añadirDdias").value);
    
    var op = document.getElementById("añadirDoperacion").value;
    
    if(op == "Restar") dias = dias * -1;
    
    var fechaFinal = calcDate(fecha, dias);
    
    alert(fechaFinal);
    
})

document.getElementById("getDias").addEventListener("click", function(){
    
    var fechaI = document.getElementById("añadirDfecha1").value;
    
    fechaI = fechaI.split("-");
    
    fechaI = new Date(parseInt(fechaI[0]), parseInt(fechaI[1])-1, parseInt(fechaI[2]));
    
    var fechaF = document.getElementById("fechaF").value;
    
    fechaF = fechaF.split("-");
    
    fechaF = new Date(parseInt(fechaF[0]), parseInt(fechaF[1])-1, parseInt(fechaF[2]));
    
    console.log(fechaI+", "+fechaF);
    
    var dias = getDays(fechaI, fechaF);
    
    alert("Hay "+dias+" de diferencia");
    
})

document.getElementById("calcAñadirDiasL").addEventListener("click", function(){
    
    var fecha = document.getElementById("añadirDfecha3").value;
    
    fecha = fecha.split("-");
    
    fecha = new Date(parseInt(fecha[0]), parseInt(fecha[1]), parseInt(fecha[2]));
    
    var dias = parseInt(document.getElementById("añadirDdiasL").value);
    
    var op = document.getElementById("añadirDoperacionL").value;
    
    if(op == "Restar") dias = dias * -1;
    
    var fechaFinal = calcWorkingDate(fecha, dias);
    
    alert(fechaFinal);
    
})

document.getElementById("getDiasL").addEventListener("click", function(){
    
    var fechaI = document.getElementById("añadirDfecha2").value;
    
    fechaI = fechaI.split("-");
    
    fechaI = new Date(parseInt(fechaI[0]), parseInt(fechaI[1]), parseInt(fechaI[2]));
    
    var fechaF = document.getElementById("fechaFL").value;
    
    fechaF = fechaF.split("-");
    
    fechaF = new Date(parseInt(fechaF[0]), parseInt(fechaF[1]), parseInt(fechaF[2]));
    
    console.log(fechaI+","+fechaF);
    
    var dias = getWorkingDays(fechaI, fechaF);
    
    alert("Hay "+dias+" de diferencia");
    
})