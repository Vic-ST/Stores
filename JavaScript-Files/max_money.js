var max_money = function() {
    if(ai1.money > ai2.money && ai1.money > ai3.money && ai1.money > me.money && ai1.money > other.money) {
        confirm("Ai1 is in the lead with $" + ai1.money);
    }else if(me.money > ai2.money && me.money > ai3.money && me.money > ai1.money && me.money > other.money) {
        confirm("You are in the lead with $" + me.money);
    }else if(ai2.money > ai1.money && ai2.money > ai3.money && ai2.money > me.money && ai2.money > other.money) {
        confirm("Ai2 is in the lead with $" + ai2.money);
    }else if(ai3.money > ai2.money && ai3.money > me.money && ai3.money > ai1.money && ai3.money > other.money) {
        confirm("Ai3 is in the lead with $" + ai3.money);
    }else if(other.money > ai2.money && other.money > me.money && other.money > ai1.money && other.money > ai3.money) {
        confirm("Ai3 is in the lead with $" + ai3.money);
    }else{
        confirm("It is a tie between some(or all) of the leading players!");
    }
};