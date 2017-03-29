    var beginRoundWith2 = function() {
        var rollDice = function() {
            return Math.floor(Math.random()*6);
        };
        var buyWorkers = function(ai) {
            if (Math.floor((ai.money - 5)/21) > 0) {
                var toBuy = Math.floor((ai.money - 10)/20);
                var cost = toBuy * 20;
                ai.workers += toBuy;
                ai.money -= cost;
            }
            confirm(ai.name + " bought " + ai.workers + " workers");
        };
        
        var youBuyWorkers = function() {
            var ask = function() {
                var max = Math.floor(me.money/20);
                var askP = prompt("How many workers would you like to buy? You have " + me.money + " dollars. The most you can buy is " + max, max)*1;
                if (me.money - (askP * 20) < 0) {
                    confirm("Oops! Sorry, it looks like you don't have enough money.");
                    ask();
                }else if(isNaN(askP)) {
                    alert("Sorry! That is not a number!");
                    ask();
                } else {
                    var cost = askP*20;
                    me.workers += askP;
                    me.money -= cost;
                    confirm("You bought " + me.workers + " workers");
                }
            };

            ask();
        };
        
        var otherPersonBuyWorkers = function() {
            var ask = function() {
                var max = Math.floor(other.money/20);
                var askP = prompt("How many workers would you like to buy? You have " + other.money + " dollars. The most you can buy is " + max, max)*1;
                if (other.money - (askP * 20) < 0) {
                    confirm("Oops! Sorry, it looks like you don't have enough money.");
                    ask();
                }else if(isNaN(askP)) {
                    alert("Sorry! That is not a number!");
                    ask();
                } else {
                    var cost = askP*20;
                    other.workers += askP;
                    other.money -= cost;
                    confirm("Person 2 bought " + other.workers + " workers");
                }
            };

            ask();
        };
        var personPersonBuyWorkers = function() {
            var ask = function() {
                var max = Math.floor(person.money/20);
                var askP = prompt("How many workers would you like to buy? You have " + person.money + " dollars. The most you can buy is " + max, max)*1;
                if (person.money - (askP * 20) < 0) {
                    confirm("Oops! Sorry, it looks like you don't have enough money.");
                    ask();
                }else if(isNaN(askP)) {
                    alert("Sorry! That is not a number!");
                    ask();
                } else {
                    var cost = askP*20;
                    person.workers += askP;
                    person.money -= cost;
                    confirm("Person 3 bought " + person.workers + " workers");
                }
            };

            ask();
        };
        var newPersonPersonBuyWorkers = function() {
            var ask = function() {
                var max = Math.floor(newPerson.money/20);
                var askP = prompt("How many workers would you like to buy? You have " + newPerson.money + " dollars. The most you can buy is " + max, max)*1;
                if (newPerson.money - (askP * 20) < 0) {
                    confirm("Oops! Sorry, it looks like you don't have enough money.");
                    ask();
                }else if(isNaN(askP)) {
                    alert("Sorry! That is not a number!");
                    ask();
                } else {
                    var cost = askP*20;
                    newPerson.workers += askP;
                    newPerson.money -= cost;
                    confirm("Person 4 bought " + newPerson.workers + " workers");
                }
            };

            ask();
        };
        
        //newPersonPersonBuyWorkers();
        //personPersonBuyWorkers();
        otherPersonBuyWorkers();
        youBuyWorkers();
        buyWorkers(ai1);
        buyWorkers(ai2);
        buyWorkers(ai3);

        var getMoneyW = function(p) {
            pValue = p.workers * 5 + 5;
            money = rollDice() * pValue;
            p.money += money;
        };
        
        var getMoneyM = function(pl) {
            getMoneyW(pl);
            getMoneyW(pl);
            getMoneyW(pl);
            getMoneyW(pl);
            getMoneyW(pl);
            //getMoneyW(pl);
            //getMoneyW(pl);
            if (pl === me) {
                confirm(pl.name + " have " + pl.money + " dollars");
            } else {
                confirm(pl.name + " has " + pl.money + " dollars");
            }
            pl.workers = 0;
        };
        
        //getMoneyM(newPerson);
        getMoneyM(other);
        //getMoneyM(person);
        getMoneyM(me);
        getMoneyM(ai1);
        getMoneyM(ai2);
        getMoneyM(ai3);
        var checkWinner = function() {
            var list = [];
            var cMoney = function(pl) {
                if (pl.money > 500000) {
                    list.push(pl);
                }
            };
            //cMoney(newPerson);
            //cMoney(person);
            cMoney(me);
            cMoney(ai1);
            cMoney(ai2);
            cMoney(ai3);
            cMoney(other);
            if (list.length === 1) {
                winner1 = list[0];
                beginRound = function() {
                    confirm(winner1.name + " won with " + winner1.money + "!");
                };
                beginRound();
            } else if (list.length === 2) {
                winner1 = list[0];
                winner2 = list[1];
                beginRound = function() {
                    confirm(winner1.name + " and " + winner2.name + " both won with over 500,000!");
                };
                beginRound();
            } else if (list.length === 3) {
                winner1 = list[0];
                winner2 = list[1];
                winner3 = list[2];
                winner4 = list[3];
                beginRound = function() {
                    confirm(winner1.name + ", " + winner2.name + ", and " + winner3.name + " won with over 500,000!");
                };
                beginRound();
            /*}else if(list.length === 4) {
                winner1 = list[0];
                winner2 = list[1];
                winner3 = list[2];
                winner4 = list[3];
                winner5 = list[4];
                beginRound = function() {
                    confirm(winner1.name + ", " + winner2.name + ", " + winner3.name + ", and " + winner4.name +" won with over 500,000!");
                };
                beginRound();
            }else if(list.length === 5) {
                winner1 = list[0];
                winner2 = list[1];
                winner3 = list[2];
                winner4 = list[3];
                winner5 = list[4];
                winner6 = list[5];
                beginRound = function() {
                    confirm(winner1.name + ", " + winner2.name + ", " + winner3.name + ", " + winner4.name + ", and " + winner5.name + " won with over 500,000!");
                };
                beginRound();
           }else if(list.length === 6) {
                winner1 = list[0];
                winner2 = list[1];
                winner3 = list[2];
                winner4 = list[3];
                winner5 = list[4];
                winner6 = list[5];
                beginRound = function() {
                    confirm(winner1.name + ", " + winner2.name + ", " + winner3.name + ", " + winner4.name + ", "  + winner5.name + ", and " + winner6.name + " won with over 500,000!");
                };
            }else if(list.length === 7) {
                winner1 = list[0];
                winner2 = list[1];
                winner3 = list[2];
                winner4 = list[3];
                winner5 = list[4];
                winner6 = list[5];
                winner7 = list[6];
                beginRound = function() {
                    confirm(winner1.name + ", " + winner2.name + ", " + winner3.name + ", " + winner4.name + ", "  + winner5.name + ", " + winner6.name + ", and " + winner7.name + " won with over 500,000!");
                };
                beginRound();
            */} else if (list.length === 4) {
                beginRound = function() {
                    confirm("Everybody won with over 500,000!");
                };
                beginRound();
            }
        };
        checkWinner();
    };
