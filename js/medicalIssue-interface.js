var MedicalIssue = require('medicalIssue.js').medicalIssueModule;

$(()=>{
  $("#medical-info-form").submit(()=>{
    event.preventDefault();
    var symptom = $("#medical-issue").val();
    var htmlFriendlySymptom = makeHTMLfriendly(symptom);
    var currentMedicalIssue = new MedicalIssue(htmlFriendlySymptom);
    var htmlFriendlyLocation = "37.773%2C-122.413%2C100";
    var docResults = currentMedicalIssue.getDoctors(htmlFriendlyLocation)
    console.log(docResults);
    $("#search-results-section").show();
  });
});
