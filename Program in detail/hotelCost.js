
// hotelCost
function hotelCost(day){
    var rent;
    // day number can equal to one or more than one
    if (day >= 1){
        // when day number is one to ten. rent value 100.
        if (day <= 10){
            rent = day * 100;
        }
        // when day number is eleven to twenty. rent value 80.
        else if (day <=20){
            var firstTenDayRent = 10 * 100;
            var secondTenDay = day - 10;
            var secondTenDayRent = secondTenDay * 80;
            rent = firstTenDayRent + secondTenDayRent;
        }
        // when day number is more than thirty. rent value 50
        else{
            var firstTenDayRent = 10 * 100;
            var secondTenDayRent = 10 * 80;
            var thirdDays = day - 20;
            var thirdDaysRent = thirdDays * 50;
            rent = firstTenDayRent + secondTenDayRent + thirdDaysRent;
        }
        return rent;
    }
    // error handle message: when day number less than one
    else{
        return "Number of days can not be zero or negative indicator value";
    }
}



var result = hotelCost(11);
console.log(result);
