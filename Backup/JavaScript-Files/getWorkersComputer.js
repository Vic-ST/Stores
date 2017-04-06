var buyWorkersComputer = function(ai) {
	if (Math.floor((ai.money - 5)/21) > 0) {
		var toBuy = Math.floor((ai.money - 10)/20);
		var cost = toBuy * 20;
		ai.workers += toBuy;
		ai.money -= cost;
	}
	confirm(ai.name + " bought " + ai.workers + " workers");
};
