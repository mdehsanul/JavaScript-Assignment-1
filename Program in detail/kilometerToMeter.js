// kilometerToMeter
function kilometerToMeter(kilometer){
    // kilometer value can equal to zore or more than zero
    if(kilometer >= 0){
        // 1 kilometer = 1000 meter
        var meter = kilometer * 1000;
        return meter;
    }
    // error handle meaaage: when  kilometer value less than zero
    else{
        return "Distance value can not be negative";
    }
}

var result = kilometerToMeter(71);
console.log(result);
