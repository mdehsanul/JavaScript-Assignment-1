// megaFriend
function megaFriend(friendNameArray){
    // friendNameArray is a array or not
    if (Array.isArray(friendNameArray)){
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
        // error handle message: when  Array is empty. array length equal to zero
        else{
            return "Provided Array is empty. please insert value in the array";
        }
    }
    //  error handle message: when an array is not passed as a parameter for the function
    else{
        return "No Array Found. pass an Array as the parameter for the function";
    }
}

//var frieName = ["ehsanul", "shanto", "ehsanulHaque", "","haque", "haqueShanto", "shantoShanto", ""];
//var frieName = [];
var result = megaFriend([0, "ehsanul"]);
console.log(result);


//console.log(frieName.length);