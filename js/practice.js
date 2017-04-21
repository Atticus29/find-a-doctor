
function Practice(name, url, description, insurances, address, schedule, phoneNumbers, languages){
  this.name = name;
  this.url = url;
  this.description = description;
  this.insurances = insurances;
  this.address = address;
  this.schedule = schedule;
  this.phoneNumbers = phoneNumbers;
  this.languages = languages;
}

Practice.prototype.displayPractice = function(){
  // console.log(this);
}

exports.practiceModule = Practice;
