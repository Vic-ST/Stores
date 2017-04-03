var beginRoundWith2 = function() {
	checkWinner(me, person, ai2, ai3, , "", "", "");
	getMoneyM(me);
	getMoneyM(person);
	getMoneyM(ai2);
	getMoneyM(ai3);
	getMoneyM("");
	getMoneyM("");
	getMoneyM("");
	buyWorkers(me);
	buyWorkers(person);
	buyWorkers("");
	buyWorkers("");
	buyWorkersComputer(ai2);
	buyWorkersComputer(ai3);
	taxPayer(me, person, ai2, ai3, "", "", "");
};
