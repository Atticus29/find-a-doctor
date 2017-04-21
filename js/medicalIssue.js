var apiKey = require('../.env').apiKey;

MedicalIssue = function(htmlFriendlySymptom){
  this.htmlFriendlySymptom = htmlFriendlySymptom;
}

MedicalIssue.prototype.getDoctors = function(htmlFriendlyLocation, searchRadius){
  console.log("htmlFriendlyLocation is: " + htmlFriendlyLocation);
  var queryString = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  console.log("queryString is: " + queryString);

  return $.ajax({
     type: "GET",
     url: queryString,
     dataType: "json",
     success: makeDoctorsOfJSON,
     error: displayError
   });

}


exports.medicalIssueModule = MedicalIssue;
