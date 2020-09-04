//variable declaration
var scrn , opt;
scrn = document.getElementById("screen") ;
opt = document.getElementById("outputScreen");
var sound = `on`;
var mode = `auto`;

//calculator core object
var calc = { 

	value: 0,
	value2:0, 
	expression:``,
	storage: [], 

	//push string inside calc
	push: function (str) {
		Array.from(str).forEach( v => this.storage.push(v) );
		return 0;
	 },
	//eval function 
	evaluate: function (obj) {
		if ((/(?=\d+[(])|[a-df-z@#$\s_'"`]|\.\d*\./gi).test(obj) == false) { //v2.0 added regex for error management
    		return Function(` "use strict"; return( ${obj} ) `)();
    	}
    	return "ERROR";
	 },
	// clear storage
	clear: function () {
		if (this.storage.length > 1) { 
			this.value2 = this.value;
			this.expression = this.storage.join(``);
		 }
		this.storage.splice(0,this.storage.length);
		return 0;
	 },
	//return ans      
	operate: function() {
		let opr = this.storage.join(``);
		this.value = this.evaluate(opr);
		return this.storage.length >= 1 ? this.value : 0 ;
	 },
	//refresh 
	ac: function () {
		location.reload();
		return 0;
	 }
		
};

//onclick functions
function acKey () { calc.ac(); return 0; }
function operateKey () { 
	calc.push(scrn.value);
	calc.operate();
  	opt.innerHTML = calc.value ;
  	calc.clear();
  	return 0;
 }
function clearKey () {  
	document.getElementById("screen2").innerHTML = scrn.value + ` ` + ` ` ;
	document.getElementById("outputScreen2").innerHTML = opt.innerHTML ;
	calc.evaluate(null);
	calc.clear();
	scrn.value = null;
	opt.innerHTML = null ;
	return 0;
 }
function manualKey () {
	if (mode ===`manual`) { mode = `auto` ; scrn.disabled = true; document.getElementById("manual").classList.remove("toggle") ; return 0; }
	if (mode ===`auto`) { mode = `manual` ; scrn.removeAttribute(`disabled`); document.getElementById("manual").classList.add("toggle") ; return 0; }
	return 0;
 }
function sndKey() { 
	if (sound === `on`) { document.getElementById("soundKey").classList.add("toggle") ; sound = `off`; return 0 ;}
	if (sound === `off`) { document.getElementById("soundKey").classList.remove("toggle") ; sound = `on`; return 0 ;}
	return 0;
 }
function abtKey() { 
 window.alert(`Hello fellow sentient being :D 
  This is a basic calculator with normal arithmetic operations and value comparison 
  Press the sound key to turn off the sound.
  Press the mode key to switch between typing and clicking . 
  In writing mode click the screen to write expressions.
  Non numeric characters and illogical input returns nil .
  parenthesis are not evaluated as a 'for'/multiplication .Using so will return error.
  Clear twice to clear everything on the screen .
  If you find any bugs pls inform me.
  Made with vanilla javascript .
  made by , Salim Sadman. `);
 }
function addKey () { scrn.value += "+"; return 0; }
function subKey () { scrn.value += "-"; return 0; }
function dotKey () { scrn.value += "."; return 0; }
function mulKey () { scrn.value += "*"; return 0; }
function divKey () { scrn.value += "/"; return 0; }
function modKey () { scrn.value += "%"; return 0; }
function expKey () { scrn.value += "e"; return 0; }
function Key1 () { scrn.value += "1"; return 0; }
function Key2 () { scrn.value += "2"; return 0; }
function Key3 () { scrn.value += "3"; return 0; }
function Key4 () { scrn.value += "4"; return 0; }
function Key5 () { scrn.value += "5"; return 0; }
function Key6 () { scrn.value += "6"; return 0; }
function Key7 () { scrn.value += "7"; return 0; }
function Key8 () { scrn.value += "8"; return 0; }
function Key9 () { scrn.value += "9"; return 0; }
function Key0 () { scrn.value += "0"; return 0; }
function lbrKey () { scrn.value += "("; return 0; }
function rbrKey () { scrn.value += ")"; return 0; }
function powKey () { scrn.value += "**"; return 0; }
function gtnKey () { scrn.value = "(" + scrn.value + ")" + ">"; return 0; }
function ltnKey () { scrn.value = "(" + scrn.value + ")" + "<"; return 0; }
function eqlKey () { scrn.value = "(" + scrn.value + ")" + "=="; return 0; }
function bspKey() { scrn.value = scrn.value.substring(0, scrn.value.length - 1); return 0; }

//button animation
document.querySelectorAll('button').forEach( (v,i,arr) => {
 	v.addEventListener(`click`, function () {
 		this.animate([
			  // keyframes
			  { transform: 'scale(1.5)' }
			], { 
			  // timing options
			  duration: 100
		 });
 		if ( sound === `on` ){
 			const audio = document.querySelector('audio');
 			audio.currentTime = 0;
    		audio.play();
    	 }
 	});	
 });
