var getMoneyW = function(p) {
	pValue = p.workers * 5 + 5;
	money = rollDice() * pValue;
	p.money += money;
};

var getMoneyM = function(pl) {
	for(var i = 0; i < 7; i++) {
		getMoneyW(pl);
	}
	if (pl === me) {
		confirm(pl.name + " have " + pl.money + " dollars");
	} else {
		confirm(pl.name + " has " + pl.money + " dollars");
	}
	pl.workers = 0;
};
