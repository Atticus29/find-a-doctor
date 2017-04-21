var MedicalIssue = require('../js/medicalIssue.js').medicalIssueModule;

$(()=>{
  $("#medical-info-form").submit(()=>{
    event.preventDefault();
    var symptom = $("#medical-issue").val();
    var htmlFriendlySymptom = makeHTMLfriendly(symptom);
    // console.log("htmlFriendlySymptom is: " + htmlFriendlySymptom);
    var currentMedicalIssue = new MedicalIssue(htmlFriendlySymptom);
    var htmlFriendlyLocation = "37.773%2C-122.413";
    // console.log(currentMedicalIssue.processSearch(htmlFriendlyLocation));
    var searchResults = currentMedicalIssue.processSearch(htmlFriendlyLocation, 100, makeObjectsFromJSON, displayError);
    // console.log(searchResults);
    $("#search-results-section").show();
  });
  $("#doctor-form").submit(()=>{
    event.preventDefault();
    var name = $("doctor-name").val();
    var htmlFriendlyName = makeHTMLfriendlyName(name);

  });
});
