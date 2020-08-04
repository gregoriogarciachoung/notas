var tecmod = document.querySelector("#sss");
function inicio(){
	document.querySelector("#sss").addEventListener("click",function(){
		
		tecmod.style="display:none";
	},false);
	}
var ctx = document.querySelector("canvas").getContext("2d");
function dibujateclado(){
	ctx.strokeStyle = '#000000';
	
	
	ctx.fillStyle = '#ffffff';
	
	
	
	ctx.beginPath();
	
	
	ctx.rect(2.685469, 1.894527, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-0
	ctx.beginPath();
	
	
	
	
	
	ctx.rect(15.498745, 1.894279, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8
	ctx.beginPath();
	
	
	
	
	
	ctx.rect(27.837460, 1.894279, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-9
	ctx.beginPath();
	
	
	
	
	
	ctx.rect(40.299919, 1.894279, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-0-1
	ctx.beginPath();
	
	
	
	
	
	ctx.rect(53.113197, 1.894279, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1
	ctx.beginPath();
	
	
	
	
	
	ctx.rect(65.451912, 1.894031, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-9
	ctx.beginPath();
	
	
	
	
	
	ctx.rect(77.825050, 1.736337, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-2
	ctx.beginPath();
	
	
	
	
	ctx.fillStyle = '#000000';
	ctx.rect(10.298802, 2.389117, 9.887519, 35.197697);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-2-1
	ctx.beginPath();
	
	
	
	ctx.rect(22.795692, 2.389365, 9.887519, 35.197697);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-2-1-2
	ctx.beginPath();
	
	
	
	ctx.rect(47.473114, 2.389365, 9.887519, 35.197697);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-2-1-3
	ctx.beginPath();
	
	
	
	ctx.rect(60.760952, 2.072988, 9.887519, 35.197697);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-2-1-8
	ctx.beginPath();
	
	
	ctx.rect(73.732422, 2.389365, 9.887519, 35.197697);
	ctx.fill();
	ctx.stroke();
	
// #rect3346-8-1-9-3
	ctx.beginPath();
	ctx.lineJoin = 'miter';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineCap = 'butt';
	ctx.lineWidth = 0.879623;
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.rect(90.261642, 1.736279, 12.459085, 59.282909);
	ctx.fill();
	ctx.stroke();
}
function bolitas(a,b){
	// #path4300-9
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 139, 255)';
	ctx.arc(8.858563, 52.676800, 4.903846, 0.000000, 6.28318531, 1);
	ctx.fill();
	
// #path4300-9-6
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 139, 255)';
	ctx.arc(a, b, 4.903846, 0.000000, 6.28318531, 1);
	ctx.fill();
}	
	function verintervalo(x){
		
    	dibujateclado();
		
		if(x == 21){
	bolitas(15.186106, 30.214020);
		}
		else if(x == 22){

	bolitas(21.513649, 52.676800);
		}
		else if(x == 31){
	
	bolitas(28.157570, 29.264889);
		}
		else if(x == 32){
			bolitas(33.852360, 53.942307);
		}
		else if(x == 40){
			bolitas(46.823822, 52.360420);
		}
		else if(x == 50){
			bolitas(59.795284, 54.258682);
		}
		else if(x == 80){
			bolitas(96.396396, 52.993172);
		}
		tecmod.style="display:initial";
	}
	window.addEventListener("load",inicio,false);