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
