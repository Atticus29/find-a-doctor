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

function renderHTMLfromJSON(jsonResponse){
  $("#doc-table").empty();
  console.log(jsonResponse.data);
  if(jsonResponse.data.length===0){
    handleNoMatches();
  }
  jsonResponse.data.forEach((obj)=>{
    var practices = makePracticesFromJSON(obj);
    var currentDoctor = makeDoctorFromJSON(obj);
    addDocToTable(currentDoctor, practices, "doc-table");
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

function makeDoctorFromJSON(obj){
  var currentDoctor = new Doctor(obj.profile.first_name, obj.profile.last_name, obj.profile.title, obj.profile.bio, obj.profile.gender, obj.profile.image_url, obj.profile.languages);
  // console.log(currentDoctor);
  return currentDoctor;
}

function displayError(error){
  console.log(error);
}

function handleErrorInDOM(){
  $("#top").hide();
  $("#form-section").hide();
  $("#search-results-section").hide();
  $("#error-results-section").show();
  setInterval(()=>{location.reload(true);}, 6000);
}

function addDocToTable(doctorObj, practicesArray, tableId){
  var rowHTML = "<tr><th><img src='"+
  doctorObj.image +"' alt='doctor-pic'></th>" +
  "<th>" + doctorObj.first + " " + doctorObj.last + ", " + doctorObj.title + "</th>" +
  "<th>" + doctorObj.gender + "</th>" +
  "<th class='biography-col'>" + doctorObj.bio + "</th>" +
  "<th>" +
  "<span class='click-for-more'>Places of Practice</span>" +
  "</th>" +
  "</tr>";
  $("#" + tableId).append(rowHTML);
}

function processLocationAPIqueryResults(jsonResponse){
  var unprocessedLocation = jsonResponse.results[0].geometry.location.lat + "," + jsonResponse.results[0].geometry.location.lng;
  // console.log(unprocessedLocation);
  var withNoSpaces = findAndReplace(unprocessedLocation, " ", "%20N%20");
  var htmlFriendlyLocation = findAndReplace(withNoSpaces, ",", "%2C");
  return htmlFriendlyLocation;
}

function handleNoMatches(){
  $("#top").hide();
  $("#form-section").hide();
  $("#search-results-section").hide();
  $("#empty-search-results-section").show();
  setInterval(()=>{location.reload(true);}, 6000);
}
