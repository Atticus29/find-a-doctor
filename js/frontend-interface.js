var medicalQuery = require('../js/medicalQuery.js').medicalQueryModule;

$(()=>{
  $("#medical-info-form").submit(()=>{
    event.preventDefault();
    var symptom = $("#medical-issue").val();
    var htmlFriendlySymptom = makeHTMLfriendly(symptom);
    var name = $("#doctor-name").val();
    // console.log("name is: " + name);
    var htmlFriendlyName = makeHTMLfriendlyName(name);
    // console.log("htmlFriendlyName is: " + htmlFriendlyName);
    // console.log("htmlFriendlySymptom is: " + htmlFriendlySymptom);
    var currentmedicalQuery = new medicalQuery(htmlFriendlySymptom, htmlFriendlyName);
    var htmlFriendlyLocation = "37.773%2C-122.413";
    // console.log(currentmedicalQuery.processSearch(htmlFriendlyLocation));
    var searchResults = currentmedicalQuery.processSearch(htmlFriendlyLocation, 100, makeObjectsFromJSON, displayError);
    // console.log(searchResults);
    $("#search-results-section").show();
  });
});
