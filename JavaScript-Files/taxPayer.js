var taxPayer = function() {
	round += 1;
	var roundsLeftUntilTaxDay = 6 - round;
	alert("The round is round " + round + " which means you have " + roundsLeftUntilTaxDay + " days until taxday.");
   	if(round === 6) {
       	alert("Tax day: Everybody loses 10% of their money.");
       	newPerson.money *= 0.90;
       	person.money *= 0.90;
       	other.money *= 0.90;
       	me.money *= 0.90;
        ai1.money *= 0.90;
        ai2.money *= 0.90;
        ai3.money *= 0.90;
        round = 0;
    }
};
