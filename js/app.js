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
				$("#try").append("<p class='plus' class='cligno3'>C'est Plus !</p>");
				console.log("+");
			} if (essai > nbMyst) {
				$("#try").append("<p class='moins' class='cligno3'>C'est Moins !</p>");
				console.log("-");
			}

			if (i === 3){
				$('#try').append("<p class='perdu' class='cligno3' >Perdu le chiffre etait "+nbMyst+"</p>")
				nbMyst = (Math.floor((9)*Math.random()+1));


			}
			else if (essai == nbMyst) {
				$("#try").append("<p class='ajout' class='cligno1'>Bravo tu as trouver , essaie encore !</p>");
				nbMyst = (Math.floor((9)*Math.random()+1));
				i = 1
				console.log("ok");
			}
			i++;

		}

	})


	
	var inter = setInterval(function(){
		$('#titre').toggleClass('cligno1');
		$('#titre').toggleClass('cligno2');
		$('.plus').toggleClass('cligno3');
		$('.plus').toggleClass('cligno2');
		$('.moins').toggleClass('cligno3');
		$('.moins').toggleClass('cligno2');
		$('.perdu').toggleClass('cligno3');
		$('.perdu').toggleClass('cligno2');
		$('.ajout').toggleClass('cligno1');
		$('.ajout').toggleClass('cligno2');
		// $('#titre').css('backgroud-colors', randcol(colors));
	}, 100);


});

