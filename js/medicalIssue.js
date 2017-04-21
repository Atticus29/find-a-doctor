var apiKey = require('../.env').apiKey;

MedicalIssue = function(htmlFriendlySymptom){
  this.htmlFriendlySymptom = htmlFriendlySymptom;
}

MedicalIssue.prototype.processSearch = function(htmlFriendlyLocation, searchRadius, makeObjectsFromJSON, displayError){
  var queryString = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;

  return $.ajax({
     type: "GET",
     url: queryString,
     dataType: "json",
     success: makeObjectsFromJSON,
     error: displayError
   });

}


exports.medicalIssueModule = MedicalIssue;
