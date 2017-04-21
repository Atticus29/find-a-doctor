var apiKey = require('../.env').apiKey;

medicalQuery = function(htmlFriendlySymptom, htmlFriendlyDocName){
  this.htmlFriendlySymptom = htmlFriendlySymptom;
  this.htmlFriendlyDocName = htmlFriendlyDocName;
}

medicalQuery.prototype.processSearch = function(htmlFriendlyLocation, searchRadius, makeObjectsFromJSON, displayError){
  var queryString;
  if(this.htmlFriendlySymptom && !this.htmlFriendlyDocName){
    queryString = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  } else if(this.htmlFriendlyDocName && !this.htmlFriendlySymptom){
    queryString = "https://api.betterdoctor.com/2016-03-01/doctors?name=" + this.htmlFriendlyDocName + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  } else if(this.htmlFriendlyDocName && this.htmlFriendlySymptom){
    queryString = "https://api.betterdoctor.com/2016-03-01/doctors?name=" + this.htmlFriendlyDocName + "&query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  }else{
    // TODO both are null!!
  }

  return $.ajax({
     type: "GET",
     url: queryString,
     dataType: "json",
     success: makeObjectsFromJSON,
     error: displayError
   });

}


exports.medicalQueryModule = medicalQuery;
