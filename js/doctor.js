
Doctor = function (first, last, title,  bio, gender, image, languages){
  this.first = first;
  this.last = last;
  this.title = title;
  this.bio = bio;
  this.gender = gender;
  this.image = image;
  this.languages = languages;
}

Doctor.prototype.displayDoctor = function(){
  // console.log(this);
}

exports.doctorModule = Doctor;
