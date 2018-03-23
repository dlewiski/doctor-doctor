export class userDisplay{

  displayNames(doctors) {
    doctors.forEach(function(doctor){
      let firstName = doctor.profile.first_name;
      let lastName = doctor.profile.last_name;
      let newPatientStatus = "not accepting new patients";

      if (doctor.practices[0].accepts_new_patients) {
        newPatientStatus = "is accepting new patients";
      }

      $(".output").append("<p>" + firstName + " " + lastName + " " + newPatientStatus + "</p>");
    })
  }
}
