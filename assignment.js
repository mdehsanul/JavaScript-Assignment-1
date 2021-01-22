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




// budgetCalculator
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){
    // any number of item(watch, phone, laptop) can equal to zero or more than zero
    if ((numOfWatch >= 0) && (numOfPhone >= 0) && (numOfLaptop >= 0)){
        // 1 watch price = 50 taka
        var watchPrice = numOfWatch * 50;
        // 1 phone price = 100 taka
        var phonePrice = numOfPhone * 100;
        // 1 laptop price = 500 taka
        var laptopPrice = numOfLaptop * 500;
        var totalBudget = watchPrice + phonePrice + laptopPrice;
        return totalBudget;
    }
    // error handle meaaage: when any number of item less than zero
    else{
        return "Number of item can not be negative";
    }
}




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
    // error handle meaaage: when day number less than one
    else{
        return "Number of days can not be zero or negative indicator value";
    }
}




// megaFriend
function megaFriend(friendNameArray){
    // when array length not equal to zero
    if(friendNameArray.length != 0){
        // taking first array index value as highest length name.
        var highestLengthName = friendNameArray[0];
        // running a for loop equal to the length of the array
        for (var i = 0; i < friendNameArray.length; i++){
            var friendName = friendNameArray[i];
            // comparison between highest length name with every name of the array
            if( friendName.length > highestLengthName.length){
                // changing highestLengthName if any new highest length name in the array
                highestLengthName = friendName;
            }
        }
        return highestLengthName;
    }
    // error handle meaaage: when  Array is empty. array length equal to zero
    else{
        return "Provided Array is empty. please insert value in the array";
    }
}





