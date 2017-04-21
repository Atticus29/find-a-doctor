$(()=>{
  $("#medical-info-form").submit(()=>{
    event.preventDefault();
    var symptom = $("#medical-issue").val();
    console.log("symptom is " + symptom);
    $("#search-results-section").show();
  });
});
