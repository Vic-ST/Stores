function player(name) {
    this.money = 15,
    this.properties = 1,
    this.workers = 0,
    this.name = name,
    this.shares = 5
    this.employee = 0,
    this.janitor = 0
    /*this.boss = 0,
    this.ceo = 0,
    this.bod = 0*/
}

var me = new player("You");
var other = new player("Person 2");
var ai1 = new player("AI1");
var ai2 = new player("AI2");
var ai3 = new player("AI3");
var winner;