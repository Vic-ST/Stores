var round = 0;

var beginRound = function() {
    var rollDice = function() {
        return Math.floor(Math.random()*6);
    }
    var buyWorkers = function(ai) {
        if (Math.floor((ai.money - 5)/21) > 0) {
            var toBuy = Math.floor((ai.money - 10)/20);
            var cost = toBuy * 20;
            ai.workers += toBuy;
            ai.money -= cost;
        }
        confirm(ai.name + " bought " + ai.workers + " workers");
    }
    var youBuyWorkers = function() {
        var ask = function() {
            var max = Math.floor(me.money/20);
            var askP = prompt("How many workers would you like to buy? You have " + me.money + " dollars. The most you can buy is " + max)*1;
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
        }
        
        ask();
    }
    /*var buyBiggerWorkers = function(ai) {
        if (Math.floor((ai.money - 5)/21) > 0) {
            var toBuy = Math.floor((ai.money - 10)/20);
            var cost = toBuy * 50;
            ai.employee += toBuy;
            ai.money -= cost;
        }
        confirm(ai.name + " bought " + ai.employee + " workers");
    }
    
    var youBuyBiggerWorkers = function() {
        var ask = function() {
            var max = Math.floor(me.money/50);
            var askP = prompt("How many employees would you like to buy? You have " + me.money + " dollars. The most you can buy is " + max)*1;
            if (me.money - (askP * 50) < 0) {
                confirm("Oops! Sorry, it looks like you don't have enough money.");
                ask();
            }else if(isNaN(askP)) {
                alert("Sorry! That is not a number!");
                ask();
            } else {
                var cost = askP*50;
                me.employee += askP;
                me.money -= cost;
                confirm("You bought " + me.employee + " employees");
            }
        }
        
        if(me.money >= 50) {
        	ask();
        }
    }*/
        
    
    youBuyWorkers();
    buyWorkers(ai1);
    buyWorkers(ai2);
    buyWorkers(ai3);
    //youBuyBiggerWorkers()
    
    var getMoneyW = function(p) {
        pValue = p.workers * 5 + 5;
        money = rollDice() * pValue;
        p.money += money;
    }
    var getMoneyM = function(pl) {
        getMoneyW(pl);
        getMoneyW(pl);
        getMoneyW(pl);
        getMoneyW(pl);
        if (pl === me) {
            confirm(pl.name + " have " + pl.money + " dollars");
        } else {
            confirm(pl.name + " has " + pl.money + " dollars");
        }
        pl.workers = 0;
    }
    
    getMoneyM(me);
    getMoneyM(ai1);
    getMoneyM(ai2);
    getMoneyM(ai3);
    
    var taxPayer = function() {
        round += 1
        var rounds_left_until_tax_day = 6 - round
        alert("The round is round " + round + " which means you have " + rounds_left_until_tax_day + " days until taxday.")
        if(round === 6) {
            alert("Tax day: Everybody loses 10% of their money.");
            me.money = me.money * 0.90
            ai1.money = ai1.money * 0.90
            ai2.money = ai2.money * 0.90
            ai3.money = ai3.money * 0.90
            round = 0
        }
    }
    taxPayer();
    var checkWinner = function(pl) {
        if (pl.money >= 500000) {
            winner = pl;
            beginRound = function() {
                confirm(winner.name  + " won with " + winner.money + "!");
            }
            beginRound();
            money_to_earn = function() {
                confirm("The game is over. " + winner.name + " won with " + winner.money + "!");
            }
        }
    }
    checkWinner(ai1);
    checkWinner(ai2);
    checkWinner(ai3);
    checkWinner(me);
}