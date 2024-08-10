//Create a function that returns true if a string is empty and false otherwise.

function emptyStr(str) {
    if(str.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(emptyStr(""));
console.log(emptyStr(" "));
console.log(emptyStr("a"));