var apiKey = require('../.env').apiKey;

console.log(apiKey);

MedicalIssue = function(htmlFriendlySymptom){
  this.htmlFriendlySymptom = htmlFriendlySymptom;
}

MedicalIssue.prototype.getDoctors = function(htmlFriendlyLocation){
  var queryString = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"&skip=0&limit=10&user_key=" + apiKey;
}


exports.medicalIssueModule = MedicalIssue;
