var play = document.querySelectorAll(".play");
var intervalo = -1;
function validacion1(fnuevo){
	if(fnuevo){
		for(var i=1; i<play.length; i++){
			play[i].disabled=true;
		}
	}else{
		play[0].disabled=true;
		for(var i=1; i<play.length; i++){
			play[i].disabled=false;
		}
	}
}
/*fin validacion*/
function llamarIntervalo(txt,num){
	var audio = new Audio(txt);
	audio.play();
	intervalo = num;
}
function verificar(valo){//método para botones celestes
		if(intervalo == valo){
			alert(":)");
			//validacion1(true);
			rdm = Math.floor(Math.random() * arr.length);
			llamarIntervalo(arr[rdm]["txt"],arr[rdm]["num"]);
		}else{
			alert(":(");
		}
}
function inicio(){
	validacion1(true);
	arr = [
			{nom:"2da menor",melo:"sonidos/2menorm.ogg",txt:"sonidos/2menori.ogg", num:21},
			{nom:"2da mayor",melo:"sonidos/2mayorm.ogg",txt:"sonidos/2mayori.ogg", num:22},
			{nom:"3ra menor",melo:"sonidos/3menorm.ogg",txt:"sonidos/3menori.ogg", num:31},
			{nom:"3ra mayor",melo:"sonidos/3mayorm.ogg",txt:"sonidos/3mayori.ogg", num:32},
			{nom:"4ta justa",melo:"sonidos/4justam.ogg",txt:"sonidos/4justai.ogg", num:40},
			{nom:"5ta justa",melo:"sonidos/5justam.ogg",txt:"sonidos/5justai.ogg", num:50},
			{nom:"8va",melo:"sonidos/8va.ogg",txt:"sonidos/8v.ogg", num:80}
		];
	rdm = -1;
	
	playclick();
}
function playclick(){
	play[0].addEventListener('click', function(){validacion1(false);
		rdm = Math.floor(Math.random() * arr.length);
		llamarIntervalo(arr[rdm]["txt"],arr[rdm]["num"]);
	},false);
	play[1].addEventListener('click', function(){
		llamarIntervalo(arr[rdm]["txt"],arr[rdm]["num"]);
	},false);
	play[2].addEventListener('click', function(){
		llamarIntervalo(arr[rdm]["melo"],arr[rdm]["num"]);
	},false);
	play[3].addEventListener('click', function(){
		alert("Presiona "+arr[rdm]["nom"]);
	},false);
}
window.addEventListener("load",inicio,false);