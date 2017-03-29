var buyWorkers = function(person1, person2, person3, person4) {
	var ask = function(exPerson) {
    	var max = Math.floor(exPerson.money/20);
		var askP = prompt("How many workers would you like to buy? You have " + exPerson.money + " dollars. The most you can buy is " + max, max)*1;
		if (exPerson.money - (askP * 20) < 0) {
			confirm("Oops! Sorry, it looks like you don't have enough money.");
			ask();
		}else if(isNaN(askP)) {
			alert("Sorry! That is not a number!");
            ask();
		} else {
			var cost = askP*20;
			exPerson.workers += askP;
			exPerson.money -= cost;
			confirm("You bought " + exPerson.workers + " workers");
  			}
	};
	ask(person1);
	ask(person2);
	ask(person3);
	ask(person4);
};
