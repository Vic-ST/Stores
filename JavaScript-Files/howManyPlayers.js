var howManyPlayers = function() {
    howManyPlayersWanted = prompt("How many players would you like(you can only have 2-4 players)? Remeber that you have to write the digit name like this: 2 or like this: two");
    if(howManyPlayersWanted === "2" || howManyPlayersWanted === "two") {
        beginRoundWith2();
    }else if(howManyPlayersWanted === "3" || howManyPlayersWanted === "three") {
        beginRoundWith3();
    }else if(howManyPlayersWanted === "4" || howManyPlayersWanted === "four") {
        beginRoundWith4();
    }else{
        alert("Sorry! That number of player is not 2, 3, or 4. Remember you have to write the digit like: 2 or like: two.");
        howManyPlayers();
    }
};
