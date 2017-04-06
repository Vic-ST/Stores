var howManyPlayers = function() {
    var howManyPlayersWanted = prompt("How many players would you like(you can only have 2-4 players)? Remeber that you have to write the digit name like this: 2 or like this: two");
    if(howManyPlayersWanted === "2" || howManyPlayersWanted === "two") {
        while(me.money < 500000 || other.money < 500000 || ai1.money < 500000 || ai2.money < 500000 || ai3.money < 500000) {
            beginRoundWith1();
        }
    }else if(howManyPlayersWanted === "3" || howManyPlayersWanted === "three") {
        while(me.money < 500000 || other.money < 500000 || person.money < 500000 || ai2.money < 500000 || ai3.money < 500000) {
            beginRoundWith2();
        }
    }else if(howManyPlayersWanted === "4" || howManyPlayersWanted === "four") {
        while(me.money < 500000 || other.money < 500000 || newPerson.money < 500000 || person.money < 500000 || ai3.money < 500000) {
            beginRoundWith3();
        }
    }else{
        alert("Sorry! That number of player is not 2, 3, or 4. Remember you have to write the digit like: 2 or like: two.");
        howManyPlayers();
    }
};
