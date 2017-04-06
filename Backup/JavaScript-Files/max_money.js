var max_money = function() {
    if(ai1.money > ai2.money && ai1.money > ai3.money && ai1.money > me.money && ai1.money > other.money && ai1.money > person.money) {
        confirm("Ai1 is in the lead with $" + ai1.money);
    }else if(me.money > ai2.money && me.money > ai3.money && me.money > ai1.money && me.money > other.money && me.money > person.money) {
        confirm("You are in the lead with $" + me.money);
    }else if(ai2.money > ai1.money && ai2.money > ai3.money && ai2.money > me.money && ai2.money > other.money && ai2.money > person.money) {
        confirm("Ai2 is in the lead with $" + ai2.money);
    }else if(ai3.money > ai2.money && ai3.money > me.money && ai3.money > ai1.money && ai3.money > other.money && ai3.money > person.money) {
        confirm("Ai3 is in the lead with $" + ai3.money);
    }else if(other.money > ai2.money && other.money > me.money && other.money > ai1.money && other.money > ai3.money && other.money > person.money) {
        confirm("Person 2 is in the lead with $" + other.money);
    }else if(person.money > ai2.money && person.money > me.money && person.money > ai1.money && person.money > ai3.money && person.money > other.money) {
        confirm("Person 3 is in the lead with $" + person.money);
    }else{
        confirm("It is a tie between some(or all) of the leading players!");
    }
};