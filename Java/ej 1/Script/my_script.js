
//evento click que al hacerlo abre el modal 
function abrirModal() { 
document.getElementById('mimodal').style.display = "block";}

// si hace click en el span cierro el modal.
function cerrarModal() {
	document.getElementById('mimodal').style.display = "none";}


	// Si hace click fuera del modal mientras esta abierto lo cierro
	window.onclick = function (event) {
		if (event.target==document.getElementById ('mimodal')) {
			document.getElementById('mimodal').style.display='none';
		}
	}

	function onloadPage() {
		alert ("Hola!");
	}