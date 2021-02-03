var pantalla 
= document.querySelector("#resultado");
// pantalla como variable
// hace una consulta al selector por ID - resultado
// para devolver un único valor.

function obtenerDatos(referencia){
	var valor = referencia.value;
	pantalla.value +=valor;
}

function limpiar(){
	pantalla.value = "";
}

function calcular(){
	try{
		if(!isFinite(pantalla.value)){
			pantalla.value = eval(pantalla.value);
		}if(isNaN(pantalla.value)){
			mostrarError();
		}if(pantalla.value === 'Infinity'){
			mostrarError();
		}
	}catch(error){
		mostrarError();
	}
}

function mostrarError(){
	pantalla.value = "SyntaxError";
	setTimeout(() =>{
		limpiar();
	},1000);
}