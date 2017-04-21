var makeHTMLfriendly = function (string){
  var addressWithNoSpaces = findAndReplace(address, " ", "%20N%20");
  var addressWithNoCommas = findAndReplace(addressWithNoSpaces, ",", "%2C%20");
}


function findAndReplace(string, target, replacement) {
  var i = 0, length = string.length;
  for (i; i < length; i++) {
    string = string.replace(target, replacement);
  }
  return string;
}
