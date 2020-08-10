window.addEventListener("load",inicio,false);
var limitrpta = 0;
var figuras="";
var rdm = -1;
var play = document.querySelectorAll(".play");
var rptritmo = "";
var conten=document.querySelector("#ritrpt");
var conten2=document.querySelector("#ritrpt2");
function inicio(){
	document.querySelector(".modal").style="display:none";
	validacion1(true);
	arr = [
			{arc:"sonidos/r1.ogg", rpt:"|4-1||4-1||4-1||4-1|", r1:["4-1","4-1","4-1","4-1"]},
			{arc:"sonidos/r2.ogg", rpt:"|4-1||8-2||4-1||4-1|", r1:["4-1","8-2","4-1","4-1"]},
			{arc:"sonidos/r3.ogg", rpt:"|8-2||4-1||16-4||4-1|", r1:["8-2","4-1","16-4","4-1"]},
			{arc:"sonidos/r4.ogg", rpt:"|4-1||8-2||16-4||16-4|", r1:["4-1","8-2","16-4","16-4"]},
			{arc:"sonidos/r5.ogg", rpt:"|8-2||8-2||8-2||4-1|", r1:["8-2","8-2","8-2","4-1"]},
			{arc:"sonidos/r6.ogg", rpt:"|16-4||8-2||16-4||16-4|", r1:["16-4","8-2","16-4","16-4"]},
			{arc:"sonidos/r7.ogg", rpt:"|8-2||16-4||4-1||16-4|", r1:["8-2","16-4","4-1","16-4"]},
			{arc:"sonidos/r8.ogg", rpt:"|4-1||8-2||16-4||8-2|", r1:["4-1","8-2","16-4","8-2"]},
			{arc:"sonidos/r9.ogg", rpt:"|8-2||8-2||16-4||4-1|", r1:["8-2","8-2","16-4","4-1"]}
		];
		
		
	
	playclick();
}
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
function playclick(){
	play[0].addEventListener('click', function(){validacion1(false);
		rdm = Math.floor(Math.random() * arr.length);
		llamarritmo(arr[rdm]["arc"],arr[rdm]["rpt"]);
		console.log(arr[rdm]["rpt"]);
	},false);
	play[1].addEventListener('click', function(){
		llamarritmo(arr[rdm]["arc"],arr[rdm]["rpt"]);
	},false);
	play[3].addEventListener('click', function(){
		document.querySelector(".modal").style="display:initial";
		rptafragmento(arr[rdm]["r1"]);
	},false);
	play[2].addEventListener('click', function(){
		borrardata();
	},false);
	document.querySelector("#cerrar").addEventListener("click",function(){
				document.querySelector(".modal").style="display:none";
				borrarparaverrpta();
			},false);
}
function llamarritmo(arc,rpt){
	var audio = new Audio(arc);
	audio.play();
	rptritmo = rpt;
}
function dibujarfiguras(figura){
	var imagen=document.createElement('img');
	imagen.src = figura+".png";
	conten.appendChild(imagen);
	figuras+="|"+figura+"|";
	console.log(limitrpta);
}
function escribirritmo(figura){
	limitrpta+=1;
	console.log("> "+limitrpta);
	
		dibujarfiguras(figura);
		if(limitrpta==4){//pregunta automática: si se ubiera colocado en el -else- a cada rato comprobaría la respuesta
		//se puede arreglar con bucle -while, do while-
			//limite para escribir ritmos; compara si la pregunta es correcta o no
			//figuras:string que escribimos al precionar el boton(escribir fragmento)
			//rptritmo:string en data de la respuesta del fragmento
			compararritmo(figuras, rptritmo);
		}
		if(limitrpta<5){
			console.log("vrpta "+figuras+" - "+rptritmo);
		}else{//pregunta automática
			borrardata();
			limitrpta=1;
			dibujarfiguras(figura);
		}
	
}
function rptafragmento(r1){
	for(var i=0;i<r1.length;i++){
		var imagen=document.createElement('img');
		imagen.src = r1[i]+".png";
		conten2.appendChild(imagen);
	}
}

function compararritmo(input, dataritmo){
	if(input == dataritmo){
		console.log(":)");
		borrardata();//antes de hace una nueva pregunta se borra los datos(el string de fragmentos y las imagenes de las figuras que escribimos, e iniciamos limitrpta=0  porque se tiene que volver a contar para escribir ver método escribirritmo("");)
		
		//nueva pregunta: escribe un número-rdm aleatorio y llama a llamarritmo(archivo, respuesta);
		rdm = Math.floor(Math.random() * arr.length);
		llamarritmo(arr[rdm]["arc"],arr[rdm]["rpt"]);
		//el archivo y respuesta están en data y según el número-rdm escogerá una de esas filas. 
	}
	else{
		alert(":(");
	}
}
function borrardata(){
	figuras="";
	
	var imgcreadas=document.querySelectorAll("#ritrpt>img");
	for(var i=0; i<limitrpta; i++){
		conten.removeChild(imgcreadas[i]);
		}
	limitrpta = 0;
}
function borrarparaverrpta(){
	
	var imgcreadas2=document.querySelectorAll("#ritrpt2>img");
	for(var i=0; i<play.length; i++){
		conten2.removeChild(imgcreadas2[i]);
		}
}