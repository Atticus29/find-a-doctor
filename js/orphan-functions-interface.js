var makeHTMLfriendly = function (string){
  var withNoSpaces = findAndReplace(string, " ", "%20N%20");
  var withNoCommas = findAndReplace(withNoSpaces, ",", "%2C%20");
  return withNoCommas;
}

function findAndReplace(string, target, replacement) {
  var i = 0, length = string.length;
  for (i; i < length; i++) {
    string = string.replace(target, replacement);
  }
  return string;
}

function makeDoctorsOfJSON(jsonResponse){
  var doctorArray = [];

}

function displayError(error){
  console.log(error);
}
