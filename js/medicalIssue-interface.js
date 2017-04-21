var MedicalIssue = require('../js/medicalIssue.js').medicalIssueModule;

$(()=>{
  $("#medical-info-form").submit(()=>{
    event.preventDefault();
    var symptom = $("#medical-issue").val();
    var htmlFriendlySymptom = makeHTMLfriendly(symptom);
    console.log("htmlFriendlySymptom is: " + htmlFriendlySymptom);
    var currentMedicalIssue = new MedicalIssue(htmlFriendlySymptom);
    var htmlFriendlyLocation = "37.773%2C-122.413";
    // console.log(currentMedicalIssue.getDoctors(htmlFriendlyLocation));
    var docs = currentMedicalIssue.getDoctors(htmlFriendlyLocation, 100);
    console.log(docs);
    $("#search-results-section").show();
  });
});
