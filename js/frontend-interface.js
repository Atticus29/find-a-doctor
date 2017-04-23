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
    currentmedicalQuery.processLocation(address, processLocationAPIqueryResults, handleErrorInDOM, makeHTMLfriendly).then(jsonResponse =>{
      var htmlFriendlyLocation = processLocationAPIqueryResults(jsonResponse);
      console.log(htmlFriendlyLocation);
      currentmedicalQuery.processSearch(htmlFriendlyLocation, 100, renderHTMLfromJSON, handleErrorInDOM);
    });
    $("#search-results-section").show();
  });
  $("#refresh-button").click(()=>{
    location.reload(true);
  });
});
