var round = 0;

var taxPayer = function(person1, person2, person3, person4, person5, person6, person7) {
	round += 1;
	var roundsLeftUntilTaxDay = 6 - round;
	alert("The round is round " + round + " which means you have " + roundsLeftUntilTaxDay + " days until taxday.");
   	if(round === 6) {
       	alert("Tax day: Everybody loses 10% of their money.");
       	person1.money *= 0.90;
       	person2.money *= 0.90;
       	person3.money *= 0.90;
       	person4.money *= 0.90;
        person5.money *= 0.90;
        person6.money *= 0.90;
        person7.money *= 0.90;
        round = 0;
    }
};
