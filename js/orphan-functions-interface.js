var Practice = require('../js/practice.js').practiceModule;

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

function makeObjectsFromJSON(jsonResponse){
  jsonResponse.data.forEach((obj)=>{
    console.log(obj);
    makePracticesFromJSON(obj);

  });
}

function makePracticesFromJSON(obj){
  var practiceArray = [];
  obj.practices.forEach((practice)=>{
    var currentPractice = new Practice(practice.name, practice.website, practice.description, practice.insurance_uids, practice.visit_address, practice.office_hours, practice.phones, practice.languages);
    practiceArray.push(currentPractice);
  })
  // console.log(practiceArray);
  return practiceArray;
}

function displayError(error){
  console.log(error);
}
