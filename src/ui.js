export class userDisplay{

  displayNames(doctors) {
    doctors.forEach(function(doctor){
      $(".output").append("<p>" + doctor.profile.first_name + " " + doctor.profile.last_name + "</p>");
    })
  }
}
