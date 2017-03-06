$(document).ready(function() {
    $(".rules").hide();
    $(".game").hide();
    $(".ruleButton").click(function() {
        $(".homePage").hide(1000);
        $(".rules").fadeIn(1000);
    });
    $(".back").click(function() {
        $(".rules").hide(1000);
        $(".game").hide(1000);
        $(".homePage").fadeIn(1000);
    });
    $(".gameButton").click(function() {
        $(".homePage").hide(1000);
        $(".game").fadeIn(1000);
    });
    $(".hide").click(function() { 
        $(".hide, .back").fadeOut(1000)
    });
    $(".goTGame").click(function() {
        $(".rules").hide(1000);
        $(".game").fadeIn(1000);
    });
});

//declares players
function player(name) {
    this.money = 30,
    this.workers = 0,
    this.name = name,
    this.shares = 5
}

var player1 = new player("player1");
var player2 = new player("player2");
var player3 = new player("player3");
var player4 = new player("player4");
var ai1 = new player("AI1");
var ai2 = new player("AI2");
var ai3 = new player("AI3");
var winner;
var round = 0;
var players;

//functions needed for game
var rollDice = function() {
    return Math.floor(Math.random()*6);
}

var max_money = function() {
    if(ai1.money > ai2.money && ai1.money > ai3.money && ai1.money > player1.money && ai1.money > player1.money && ai1.money > player4.money && ai1.money > player3 && ai1.money > player2.money) {
        alert("Ai1 is in the lead with $" + ai1.money)
    }else if(player1.money > ai2.money && player1.money > player1.money && player1.money > ai1.money && player1.money > player1.money && player1.money > player4.money && player1.money > player3 && player1.money > player2.money) {
        alert("You are in the lead with $" + player1.money)
    }else if(ai2.money > ai1.money && ai2.money > ai3.money && ai2.money > player1.money && ai2.money > player1.money && ai2.money > player4.money && ai2.money > player3 && ai2.money > player2.money) {
        alert("Ai2 is in the lead with $" + ai2.money)
    }else if(ai3.money > ai2.money && ai3.money > ai1.money && ai3.money > player1.money && ai3.money > player1.money && ai3.money > player4.money && ai3.money > player3 && ai3.money > player2.money) {
        alert("Ai3 is in the lead with $" + ai3.money)
    }else if(ai1.money > ai2.money && ai1.money > ai3.money && ai1.money > player1.money && ai1.money > player1.money && ai1.money > player4.money && ai1.money > player3 && ai1.money > player2.money) {
        alert("player2 is in the lead!");
    }else if(player3.money > ai2.money && player3.money > ai3.money && player3.money > player1.money && player3.money > player1.money && player3.money > player4.money && player3.money > ai1 && player3.money > player2.money) {
        alert("player3 is in the lead!");
    }else if(player4.money > ai2.money && player4.money > ai3.money && player4.money > player1.money && player4.money > player1.money && player4.money > ai1.money && player4.money > player3 && player4.money > player2.money) {
        alert("player4 is in the lead!");
    }else{
        alert("It is a tie between soplayer1(or all) of the leading players!")
    }
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

var pBuyWorkers = function(p) {
    var max = Math.floor(p.money/20);
    var askP = Math.floor(Math.abs(prompt(p.name + ", how many workers would you like to buy? You have " + p.money + ", and the most you can buy is " + max + ".")))*1;
    if (askP > max) {
        confirm("Oops! It looks like you don't have enough money.");
        pBuyWorkers(p);
    } else if (isNaN(askP)) {
        confirm("Sorry! That's not a number!");
        pBuyWorkers(p);
    } else {
        var cost = askP*20;
        p.workers += askP;
        p.money -= cost;
        confirm(p.name + " bought " + p.workers + " workers");
    }
}

var getMoneyW = function(pl) {
    pValue = pl.workers * 5 + 5;
    var money1 = rollDice() * pValue;
    pl.money += money1;
}
var getMoneyM = function(ply) {
    getMoneyW(ply);
    getMoneyW(ply);
    getMoneyW(ply);
    getMoneyW(ply);
    if(ply === me) {
        confirm(ply.name + " have " + ply.money);
    }else{
        confirm(ply.name + " has " + ply.money);
    }
    ply.workers = 0;
}
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

//begin rounds
var beginRound1 = function() {
    players = [player1, ai1, ai2, ai3];
    player1.name = "you"
    pBuyWorkers(player1);
    buyWorkers(ai1);
    buyWorkers(ai2);
    buyWorkers(ai3);
    getMoneyM(player1);
    getMoneyM(ai1);
    getMoneyM(ai2);
    getMoneyM(ai3);
    taxpayer();
    checkWinner(player1)
    checkWinner(ai1)
    checkWinner(ai2)
    checkWinner(ai3)
}
var beginRound2 = function() {
    players = [player1, player2, ai1, ai2];
    pBuyWorkers(player1);
    pBuyWorkers(player2);
    buyWorkers(ai1);
    buyWorkers(ai2);
    getMoneyM(player1);
    getMoneyM(player2);
    getMoneyM(ai1);
    getMoneyM(ai2);
    taxpayer();
    checkWinner(player1)
    checkWinner(player2)
    checkWinner(ai1)
    checkWinner(ai2)
}
var beginRound3 = function() {
    players = [player1, player2, player3, ai1];
    pBuyWorkers(player1);
    pBuyWorkers(player2);
    pBuyWorkers(player3);
    buyWorkers(ai1);
    getMoneyM(player1);
    getMoneyM(player2);
    getMoneyM(player3);
    getMoneyM(ai1);
    taxpayer();
    checkWinner(player1)
    checkWinner(player2)
    checkWinner(player3)
    checkWinner(ai1)
}
var beginRound4 = function() {
    players = [player1, player2, player3, player4];
    pBuyWorkers(player1);
    pBuyWorkers(player2);
    pBuyWorkers(player3);
    pBuyWorkers(player4);
    getMoneyM(player1);
    getMoneyM(player2);
    getMoneyM(player3);
    getMoneyM(player4);
    taxpayer();
    checkWinner(player1)
    checkWinner(player2)
    checkWinner(player3)
    checkWinner(player4)
}