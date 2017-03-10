// code examples for all upgrades

function player(name) {
  	this.money = 15,
  	this.name = name,
	this.shares = 5,
    	this.worker = 0,
    	this.employee = 0
}

var me = new player("Bob")
var player2 = new player("Sam")

/*
Example:
var buy = function(person) {
    var buying = prompt("How many workers would you like to buy?");
    var buying = function() {
        person.money -= buying * 20
    }
}
*/

var upgrades = function() {
	if(me.money <= 100) {
		var buy = prompt("You can buy some workers! How many would you like to buy?");
		if(buy <= 0) {
			alert("Its okay if you don't want buy any!");
		}else if(buy >= 1) {
			var spent = buy;
			me.worker += spent
		}
	}
}
