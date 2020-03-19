var ggg = true;
var hhh = 30;
var iii = Math.pow(hhh,2);
var jjj = 150;
var kkk = 0;
var lll = [];
var uuu, vvv, cccc, CURqqq, xxx;
var mmm = [0,1];
var nnn = [0,-1];
var ooo = [1,0];
var ppp = [-1,0];
var qqq = 'ooo';
var sss = false;
var rrr = false;

function fff(){
	var ttt = document.getElementById("score");
	if(sss){
	ttt.innerHTML = `${kkk}, game over`;
	}else{
	ttt.innerHTML = `${kkk}`;
	}

}

function eee(){
	for(var i=0;i<iii;i++){
	cell = document.createElement("DIV");
	cell.className = "cell";
	cell.id = i;
	board.appendChild(cell);
	}
}

function ddd(){
	uuu = getRandomInt(iii);
	vvv = uuu-1;
	xxx = [vvv,uuu];

	var www = document.getElementById(uuu);
	var yyy = document.getElementById(vvv);
	www.classList.add("snake");
	yyy.classList.add("snake");
}

function aaa(){
	ggg = false;
}

function bbb(){
	ggg = true;
}

function ccc(){
	ggg = true;
	document.getElementById("board").innerHTML = "";
	eee();
	ddd();
	zzz();  
	aaaa();
	kkk = 0;
	sss=false;
	ggg=false;
	fff();
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function aaaa(){
	var bbbb = document.getElementById(cccc);
	bbbb.classList.add("snack")
}

function zzz(){
	var bbbb = document.getElementById(cccc);
	bbbb.classList.remove("snack")
}

window.onload = function(){
	var board = document.getElementById("board");

	cccc = getRandomInt(iii);
	CURqqq = ooo;


	for(var i=0; i<iii; i++){ lll.push(false);}

	document.onkeydown = checkKey;

	function checkKey(e) {

	    e = e || window.event;
	    /*
	     One small bug. If I change qqqection 
	     rapidly will bypass the if conditions 
	     protection for opposite qqqections.
	    */
	    if (e.keyCode == '38' && CURqqq != mmm) {
		// nnn arrow
		//CURqqq = nnn;
		qqq = 'nnn';
	    }
	    else if (e.keyCode == '40' && CURqqq != nnn) {
		// mmm arrow
		//CURqqq = mmm;
		qqq = 'mmm';
	    }
	    else if (e.keyCode == '37' && CURqqq != ooo ) {
	       // left arrow
	       //CURqqq = ppp;
	       qqq = 'ppp';
	    }
	    else if (e.keyCode == '39' && CURqqq != ppp) {
	       // right arrow
	       //CURqqq = ooo;
	       qqq='ooo';
	    }

	}

	
	function dddd(hhhh){
	   var www = document.getElementById(uuu);
	   var yyy = document.getElementById(hhhh);

	   www.classList.add("snake");
	   if(!rrr){
	     yyy.classList.remove("snake");
	   }
	}

	function eeee(i, j){
	  if(j<0 || i>=hhh || j>hhh){
		//WORKING UO AND nnn
		sss = true;
		fff();
	  }

	  
	 console.log(qqq + ": " + i + " " + j)
	}

	function ffff(){
		for(var n=0; n<xxx.length; n++){				      
			if(n!=xxx.length-1 && n!=0){
				if(uuu == xxx[n]){
					console.log(`${n}, ${uuu} , ${xxx[n]} `)
					sss = true;
					fff();
				}
			}
		}	
	}

	function gggg(){
	   //console.log(`uuu: ${uuu} ; vvv: ${vvv}; cccc: ${cccc}`);
	   if(!ggg){
	   var hhhh;
	   var incx = CURqqq[0];
	   var incy = CURqqq[1];
	   var hi = uuu % (hhh);
	   if(hi==29 && qqq=='ooo'){
		   hi=30;
	   }
	   if(hi==0 && qqq=='ppp'){
		   hi=30;
	   }
	   var hj = parseInt(uuu / hhh);
	   
	   if(qqq=='ooo'){
	      CURqqq = ooo;
	   }else if(qqq=='ppp'){
	      CURqqq = ppp;
	   }else if(qqq=='mmm'){
	      CURqqq = mmm;
	   }else if(qqq=='nnn'){
	      CURqqq = nnn;
	   }

	   eeee( hi, hj);
	   ffff();

	   if(!sss){
		   uuu = (hi+incx) + hhh*(hj+incy);
		   if(uuu == cccc){ 
		       rrr=true;
		       kkk += 100;
		       fff();
		   }

		   xxx.push(uuu);
		   
		   if(!rrr){
		     hhhh = xxx.splice(0,1)[0]
		   }

		   dddd(hhhh);
		   
		   if(!rrr){
			vvv = xxx[0];
		   }
		   
		   if(rrr){
		     zzz();
		     cccc = getRandomInt(iii);
		     aaaa();
		   }

		   rrr=false;
	  }else{
		  //console.log(hi+ " " + hj);
		  //console.log(hhh);
	  }
	}//ggg

	}			

  //main
  eee();
  ddd();
  aaaa();
  fff();
  setInterval(gggg, jjj);

}



