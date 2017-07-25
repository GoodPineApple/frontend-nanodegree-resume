var myName = "김태민"
var myRole = "웹 개발자"
var formattedName = HTMLheaderName.replace("%data%",myName);
$('#header').prepend(formattedName);
var formattedRole = HTMLheaderRole.replace('%data%',myRole);
$('#header').prepend(formattedRole);

var sampleArray = [0,0,7];

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    console.log(newArray);
    var lastNumber = newArray.pop();
    console.log(newArray);
    console.log(lastNumber);
    newArray.push(lastNumber + 1);
    console.log(newArray);
    return newArray;
}
console.log(incrementLastArrayElement(sampleArray));


