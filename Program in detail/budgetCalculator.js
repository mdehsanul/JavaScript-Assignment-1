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
    // error handle message: when any number of the item less than zero
    else{
        return "Number of the item can not be negative";
    }
}


var result = budgetCalculator(1, 0, -1);
console.log(result);
