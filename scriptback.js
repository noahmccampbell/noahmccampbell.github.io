function maincalc(entry){
	var textview = document.getElementById("Textview");
	
	if(entry == 'CE'){
		textview.innerHTML = "";
	}
	else{
	textview.innerHTML = textview.innerHTML + entry;
	}
}
function equal(){
	document.getElementById("Textview").innerHTML = eval(document.getElementById("Textview").innerHTML);
}