
    function guardarPersona(event){
        event.preventDefault();
        let formulario = document.getElementById('Formulario');
        let nombre = formulario.elements['nombre'].value;
        if(nombre.length < 3)
        return alert('Ingrese un nombre valido');
        let apellido = formulario.elements['apellido'].value;
		if(apellido.length < 3)
        return alert('Ingrese un apellido valido');
        let email = formulario.elements['email'].value;
        let fecha1 = formulario.elements['fecha'].value;
        let celular = formulario.elements['celular'].value
        if(celular.length < 10)
        return alert('Ingrese un celular valido');
        let fecha2 = formulario.elements['fecha'].value;
		let planeta = formulario.elements['planeta'].value;
		let asiento = formulario.elements['asiento'].value;
        let msj = formulario.elements['asiento'].value;
        if(mensaje.length < 25)
        return alert('El mensaje debe contener menos de 25 caracteres');

        if(!nombre || !apellido || !email || !fecha1 || !celular || !fecha2 || planeta || asiento || msj){
            alert('Por favor complete todos los campos');
        }
        let persona = {
            nombre: nombre,
            apellido: apellido,
            domicilio: domicilio,
            email: email,
            fecha1: fecha1,
            celular: celular,
			planeta: planeta,
			fecha: fecha,
        };
        localStorage.setItem('persona', JSON.stringify(persona));
        window.location.href = 'datos.html';
    }     

let button = document.querySelector('button');
    button.addEventListener('Enviar',function(){
        button.innerText = "Ya hiciste click";
        button.disabled = true;
    })

