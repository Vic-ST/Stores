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
