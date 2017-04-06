var beginRoundWith1 = function() {
	checkWinner(me, ai1, ai2, ai3, "NO", "NO", "NO");
	getMoneyM(me);
	getMoneyM(ai1);
	getMoneyM(ai2);
	getMoneyM(ai3);
	getMoneyM("");
	getMoneyM("");
	getMoneyM("");
	buyWorkers(me);
	buyWorkers("");
	buyWorkers("");
	buyWorkers("");
	buyWorkersComputer(ai1);
	buyWorkersComputer(ai2);
	buyWorkersComputer(ai3);
	taxPayer(me, ai1, ai2, ai3, "", "", "");
};
