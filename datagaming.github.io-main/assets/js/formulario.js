function validar(){
	var nombre,edad,mail,comunicaciones,check1cond,check2priv;
	const esCorreoElectronico = correoElectronico => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(correoElectronico);

	nombre = document.miFormulario.nombre.value;
	mail = document.miFormulario.mail.value;	
	edad = document.miFormulario.edad.value;		
	comunicaciones = document.miFormulario.comunicaciones.value;	
	check1cond = document.miFormulario.condiciones.checked;
	check2priv = document.miFormulario.privacidad.checked;

	if (nombre.length==0){
		alert("El nombre es un campo obligatorio.");
		document.miFormulario.nombre.focus();
		return 0;
	}else if (nombre.length<4){
		alert("No se admiten nombres inferiores a 4 caracteres.");
		document.miFormulario.nombre.focus();
		document.miFormulario.nombre.value="";
		return 0;
	}else if (!esCorreoElectronico(mail)){
		alert("Debe introducir una dirección de correlo electrónico válida.");
		document.miFormulario.mail.focus();
		return 0;
	}else if (edad.length==0){
		alert("La edad es un campo obligatorio.");
		document.miFormulario.edad.focus();		
		return 0;
	}else if (edad<18){
		alert("Algunos juegos contienen violencia y otros contenidos etiquetados como AO (Adults only), es necesario ser mayor de 18 años para susvribirse a nuestra newsletter.");
		document.miFormulario.edad.focus();
		document.miFormulario.edad.value="";		
		return 0;	
	}else if (check1cond==false){
		alert("Debe aceptar las condiciones de uso.");
		document.miFormulario.condiciones.focus();		
		return 0;
	}else if (check2priv==false){
		alert("Debe aceptar la política de privacidad.");
		document.miFormulario.privacidad.focus();		
		return 0;
	}else{
		alert("Datos correctos, se ha dado de alta al usuario.");
		document.location.reload();
	}
}