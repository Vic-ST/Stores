function Player(name) {
	this.name    = name,
	this.money   = 15,
	this.workers = 0;
}

var you  = new Player("You");
var you2 = new Player("Rival");
var you3 = new Player("Arch nemesis");
var ai1  = new Player("Ai1");
var ai2  = new Player("Ai2");
var ai3  = new Player("Ai3");

var begin_Round = function() {
	// Dice
	var dice = Math.floor(Math.random() * 6) + 1;
	
	// Buy workers for player You
	var buy_Workers_You = function() {
		var max = you.money/20;
		var howMany = prompt("How many workerws would you like to buy? The most you can buy is " + max);
		var ask = function() {
			if(howMany > max) {
				alert("Sorry! You cannot buy that many workers.");
				ask();
			}else{
				you.workers += howMany;
				you.money - howMany * 20;
				confirm("You bought " + howMany + " workers");
			}
		}
		ask();
	}
};
