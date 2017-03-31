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
        getMoneyM(ai3);ge
