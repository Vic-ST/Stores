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
        
        buyWorkers(ai1);
        buyWorkers(ai2);
        buyWorkers(ai3);

        /*var getMoneyW = function(p) {
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
        getMoneyM(ai3);*/
    };
