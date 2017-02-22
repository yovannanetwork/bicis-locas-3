$(document).ready(function(){
	$('#name').keyup(validateName);
	$('#lastname').keyup(validaLastname);
	$('#input-password').keyup(validatePassword);
});
function validateForm()
{
	validateName();
	validaLastname();
	validateEmail();
	validatePassword();
}
function createSpan(conteiner, message)
{
	if(conteiner.find("span").length == 0)
		conteiner.append("<span>"+message+"</span>");
	
}
function validateName(){
	var contenidoName = $("#conteinerName");
	var name=$("#name").val();
	if(name.length==0){
		createSpan(contenidoName, "Tiene que ingresar nombre");
		$('#name').focus();
	}
	else if(/([0-9])/g.test(name)){
		createSpan(contenidoName, "Solo se permite letra");
	}else
	{
		$("#conteinerName span").remove();
	}
	
}
function validaLastname(){
	var contenidoLastname = $("#containerLastname");
	var lastname=$("#lastname").val();
	if(lastname.length>0){
		$("#containerLastname span").remove();
	}else{
		createSpan(contenidoLastname, "Tiene que ingresar su apellido");
	}
}
function validateEmail(){
	var contenidoEmail = $('#correo');
	var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var email = $('#input-email').val();
	if(email.length == 0){
		createSpan(contenidoEmail, "Ingrese su correo");
	}else if(!expresion.test(email)){
		createSpan(contenidoEmail, "Corre no valida");
	}else{
		$('#correo span').remove();
	}
}
function validatePassword(){
	var contenidoPasswod = $('#containerPassword');
	var password = $('#input-password').val();
	if(password.length === 0 || password === '123456' || password === "password" || password === '098754' || password.length <6 ){
		createSpan(contenidoPasswod, "contraseña no valida");
	}else{
		$("#containerPassword span").remove();
	}
}

