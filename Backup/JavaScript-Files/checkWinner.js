var checkWinner = function(person1, person2, person3, person4, person5, person6, person7) {
	var list = [];
	var cMoney = function(pl) {
		if (pl.money > 500000) {
			list.push(pl);
		}
	};
	cMoney(person1);
	cMoney(person2);
	cMoney(person3);
	cMoney(person4);
	cMoney(person5);
	cMoney(person6);
	cMoney(person7);
	if (list.length === 1) {
		person1 = list[0];
		beginRound = function() {
			confirm(winner1.name + " won with " + person1.money + "!");
		};
		beginRound();
	} else if (list.length === 2) {
		person1 = list[0];
		person2 = list[1];
		beginRound = function() {
			confirm(person1.name + " and " + person2.name + " both won with over 500,000!");
		};
		beginRound();
	} else if (list.length === 3) {
		person1 = list[0];
		person2 = list[1];
		person3 = list[2];
		person4 = list[3];
		beginRound = function() {
			confirm(person1.name + ", " + person2.name + ", and " + person3.name + " won with over 500,000!");
		};
		beginRound();
	}else if(list.length === 4) {
		person1 = list[0];
		person2 = list[1];
		person3 = list[2];
		person4 = list[3];
		winner5 = list[4];
		beginRound = function() {
			confirm(winner1.name + ", " + winner2.name + ", " + winner3.name + ", and " + winner4.name +" won with over 500,000!");
		};
		beginRound();
	}else if(list.length === 5) {
		person1 = list[0];
		person2 = list[1];
		person3 = list[2];
		person4 = list[3];
		person5 = list[4];
		beginRound = function() {
			confirm(person1.name + ", " + person2.name + ", " + person3.name + ", " + person4.name + ", and " + person5.name + " won with over 500,000!");
		};
		beginRound();
	}else if(list.length === 6) {
		person1 = list[0];
		person2 = list[1];
		person3 = list[2];
		person4 = list[3];
		person5 = list[4];
		person6 = list[5];
		beginRound = function() {
			confirm(person1.name + ", " + person2.name + ", " + person3.name + ", " + person4.name + ", "  + person5.name + ", and " + person6.name + " won with over 500,000!");
		};
		beginRound();
	} else if (list.length === 7) {
		beginRound = function() {
			confirm("Everybody won with over 500,000!");
		};
		beginRound();
	}
}
