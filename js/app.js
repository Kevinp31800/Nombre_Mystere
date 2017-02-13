$(document).ready(function(){

	
	console.log("Le chiffre est compris entre 0 et 9 !");

	var nbMyst = (Math.floor((9)*Math.random()+1));
	var i = 1;

	$('#chiffre').keypress(function(e){

		//console.log(e.which)

		if(e.which === 13 ){

			var essai =  $("#chiffre").val();
			console.log(essai); 

			if (essai < nbMyst){
				$("#try").append("<p>C'est Plus !</p>");
				console.log("+");
			} if (essai > nbMyst) {
				$("#try").append("<p>C'est Moins !</p>");
				console.log("-");
			}

			if (essai === 3){
				$('#try').append('<p>Perdu le chiffre etait</p>'+nbMyst)

			}
			if (essai == nbMyst) {
				$("#try").append("<p>Bravo tu as trouver, essaie encore !</p>");
				nbMyst = (Math.floor((9)*Math.random()+1));
				i = 1
				console.log("ok");
			}
			i++;

		}

	})



});

var colors = ["DF06FF", "50FFFA", "FFFC00", "FFD300", "2116FF"];
function randcol (arg) {
	if(!prevrand){
		var prevrand = arg.length+1
	}
	var  rand = arg[Math.floor((Math.random()*arg.length))];
	while (rand === prevrand) {
		var rand = arg[Math.floor((Math.random()*arg.length))];
	}
	prevrand = rand;
	return rand;
};
var inter = setInterval(function(){

$('#titre').css('colors', randcol(colors));//text
$('#titre').css('backgroud-colors', randcol(colors));//text
});