var apiKey = require('../.env').apiKey;
var mapKey = require('../.env').mapKey;

medicalQuery = function(htmlFriendlySymptom, htmlFriendlyDocName){
  this.htmlFriendlySymptom = htmlFriendlySymptom;
  this.htmlFriendlyDocName = htmlFriendlyDocName;
}

medicalQuery.prototype.processLocation = function(address, processLocationAPIqueryResults, handleErrorInDOM){
  var queryString = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + mapKey;
  return $.ajax({
     type: "GET",
     url: queryString,
     dataType: "json",
     success: processLocationAPIqueryResults,
     error: handleErrorInDOM
   });
}

medicalQuery.prototype.processSearch = function(htmlFriendlyLocation, searchRadius, renderHTMLfromJSON, handleErrorInDOM){
  var queryString;
  if(this.htmlFriendlySymptom && !this.htmlFriendlyDocName){
    queryString = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  } else if(this.htmlFriendlyDocName && !this.htmlFriendlySymptom){
    queryString = "https://api.betterdoctor.com/2016-03-01/doctors?name=" + this.htmlFriendlyDocName + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  } else if(this.htmlFriendlyDocName && this.htmlFriendlySymptom){
    queryString = "https://api.betterdoctor.com/2016-03-01/doctors?name=" + this.htmlFriendlyDocName + "&query=" + this.htmlFriendlySymptom + "&location=" + htmlFriendlyLocation +"%2C"+ searchRadius + "&user_location=" + htmlFriendlyLocation + "&skip=0&limit=10&user_key=" + apiKey;
  }else{
    handleErrorInDOM();
  }

  // TODO add address ajax request to get location
  // TODO add conditions query https://api.betterdoctor.com/2016-03-01/conditions?user_key=1b2466a811c284accd592c0c354b142e to get all conditions

  return $.ajax({
     type: "GET",
     url: queryString,
     dataType: "json",
     success: renderHTMLfromJSON,
     error: handleErrorInDOM
   });
}

exports.medicalQueryModule = medicalQuery;
