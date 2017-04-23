var medicalQuery = require('../js/medicalQuery.js').medicalQueryModule;

$(()=>{
  $("#medical-info-form").submit(()=>{
    event.preventDefault();
    var address = $("#user-address").val();
    var symptom = $("#medical-issue").val();
    var htmlFriendlySymptom = makeHTMLfriendly(symptom);
    var name = $("#doctor-name").val();
    var htmlFriendlyName = makeHTMLfriendlyName(name);
    var currentmedicalQuery = new medicalQuery(htmlFriendlySymptom, htmlFriendlyName);
    var htmlFriendlyLocation = "37.773%2C-122.413";
    var searchResults = currentmedicalQuery.processSearch(htmlFriendlyLocation, 100, renderHTMLfromJSON, displayError);
    $("#search-results-section").show();
  });
  $("#refresh-button").click(()=>{
    location.reload(true);
  });
});
