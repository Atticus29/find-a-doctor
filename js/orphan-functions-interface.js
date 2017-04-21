var Practice = require('../js/practice.js').practiceModule;
var Doctor = require('../js/doctor.js').doctorModule;

var makeHTMLfriendly = function (string){
  var withNoSpaces = findAndReplace(string, " ", "%20N%20");
  var withNoCommas = findAndReplace(withNoSpaces, ",", "%2C%20");
  return withNoCommas;
}

function makeHTMLfriendlyName(name){
  var result = makeHTMLfriendly(name);
  // TODO manipulate here or just make this the same as makeHTMLfriendly
  return result;
}

function findAndReplace(string, target, replacement) {
  var i = 0, length = string.length;
  for (i; i < length; i++) {
    string = string.replace(target, replacement);
  }
  return string;
}

function makeObjectsFromJSON(jsonResponse){
  practiceDoctorPairObjectArray = [];
  var doctorArray = [];
  jsonResponse.data.forEach((obj)=>{
    // console.log(obj);
    var practices = makePracticesFromJSON(obj);
    var currentDoctor = makeDoctorFromJSON(obj);
    doctorArray.push(currentDoctor);
    var currentPracticeDoctorPair = {doctor: currentDoctor, practices: practices};
    practiceDoctorPairObjectArray.push(currentPracticeDoctorPair);
  });
  console.log(practiceDoctorPairObjectArray);
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

function makeDoctorFromJSON(obj){
  var currentDoctor = new Doctor(obj.profile.first_name, obj.profile.last_name, obj.profile.title, obj.profile.bio, obj.profile.gender, obj.profile.image_url, obj.profile.languages);
  // console.log(currentDoctor);
  return currentDoctor;
}

function displayError(error){
  console.log(error);
}
